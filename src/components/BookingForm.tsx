import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { format, eachDayOfInterval, parseISO } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";

const bookingSchema = z
  .object({
    guest_name: z.string().trim().min(2, "Минимум 2 символа").max(100),
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    email: z
      .string()
      .trim()
      .max(255)
      .email("Некорректный email")
      .optional()
      .or(z.literal("")),
    check_in: z.string().min(1, "Выберите дату заезда"),
    check_out: z.string().min(1, "Выберите дату выезда"),
    guests_count: z.coerce.number().int().min(1).max(20),
    needs_excursions: z.boolean(),
    needs_meals: z.boolean(),
    comment: z.string().trim().max(1000).optional().or(z.literal("")),
  })
  .refine((v) => new Date(v.check_out) > new Date(v.check_in), {
    message: "Дата выезда должна быть позже заезда",
    path: ["check_out"],
  })
  .refine((v) => v.phone || v.email, {
    message: "Укажите телефон или email для связи",
    path: ["phone"],
  });

const today = new Date().toISOString().slice(0, 10);

/** Expand booked range into individual disabled dates */
function expandBookedDates(rows: { check_in: string; check_out: string }[]): Date[] {
  const set = new Set<string>();
  for (const r of rows) {
    const start = parseISO(r.check_in);
    const end = parseISO(r.check_out);
    // disable check-out day too so guests can't overlap
    const days = eachDayOfInterval({ start, end });
    for (const d of days) {
      set.add(format(d, "yyyy-MM-dd"));
    }
  }
  return [...set].map((s) => parseISO(s));
}

interface Props {
  check_in?: string;
  check_out?: string;
}

const BookingForm = ({ check_in: initialIn = "", check_out: initialOut = "" }: Props) => {
  const [loading, setLoading] = useState(false);

  // Sync dates picked from calendar into the form
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      ...(initialIn ? { check_in: initialIn } : {}),
      ...(initialOut ? { check_out: initialOut } : {}),
    }));
  }, [initialIn, initialOut]);

  // Fetch confirmed bookings to show unavailable dates
  const { data: bookedDates } = useQuery({
    queryKey: ["booked-dates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("check_in, check_out");
      if (error) throw error;
      return expandBookedDates(data ?? []);
    },
    refetchInterval: 60_000, // refresh every minute
    staleTime: 30_000,
  });

  const disabledDates = useMemo(() => bookedDates ?? [], [bookedDates]);
  const [form, setForm] = useState({
    guest_name: "",
    phone: "",
    email: "",
    check_in: "",
    check_out: "",
    guests_count: "2",
    needs_excursions: false,
    needs_meals: false,
    comment: "",
  });

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Проверьте поля",
        description: parsed.error.issues[0]?.message ?? "Некорректные данные",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("bookings").insert({
      guest_name: parsed.data.guest_name,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      check_in: parsed.data.check_in,
      check_out: parsed.data.check_out,
      guests_count: parsed.data.guests_count,
      needs_excursions: parsed.data.needs_excursions,
      needs_meals: parsed.data.needs_meals,
      comment: parsed.data.comment || null,
    });
    setLoading(false);

    if (error) {
      toast({
        title: "Не удалось отправить заявку",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setForm({
      guest_name: "",
      phone: "",
      email: "",
      check_in: "",
      check_out: "",
      guests_count: "2",
      needs_excursions: false,
      needs_meals: false,
      comment: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-elegant space-y-6"
    >
      <div>
        <h3 className="text-2xl md:text-3xl font-light text-architectural mb-2">
          Оставьте заявку
        </h3>
        <p className="text-sm text-muted-foreground">
          Мы свяжемся с вами по указанному контакту
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="guest_name">Имя</Label>
          <Input
            id="guest_name"
            value={form.guest_name}
            onChange={(e) => update("guest_name", e.target.value)}
            placeholder="Как к вам обращаться"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+7 ___ ___ __ __"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (необязательно)</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="check_in">Заезд</Label>
          <DatePicker
            id="check_in"
            value={form.check_in}
            onChange={(v) => update("check_in", v)}
            minDate={today}
            disabledDates={disabledDates}
            placeholder="Дата заезда"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="check_out">Выезд</Label>
          <DatePicker
            id="check_out"
            value={form.check_out}
            onChange={(v) => update("check_out", v)}
            minDate={form.check_in || today}
            disabledDates={disabledDates}
            placeholder="Дата выезда"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests_count">Гостей</Label>
          <Input
            id="guests_count"
            type="number"
            min={1}
            max={20}
            value={form.guests_count}
            onChange={(e) => update("guests_count", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-3 rounded-2xl border border-border p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.needs_excursions}
            onCheckedChange={(v) => update("needs_excursions", v === true)}
            className="mt-1"
          />
          <div>
            <div className="text-sm font-medium">Нужны экскурсии</div>
            <div className="text-xs text-muted-foreground">
              Водопады, пещеры, пешие маршруты с гидом
            </div>
          </div>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.needs_meals}
            onCheckedChange={(v) => update("needs_meals", v === true)}
            className="mt-1"
          />
          <div>
            <div className="text-sm font-medium">Нужно питание</div>
            <div className="text-xs text-muted-foreground">
              Домашние завтраки, обеды и ужины
            </div>
          </div>
        </label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comment">Комментарий</Label>
        <Textarea
          id="comment"
          value={form.comment}
          onChange={(e) => update("comment", e.target.value)}
          placeholder="Нужна ли встреча в Мин.Водах, особые пожелания…"
          rows={4}
          maxLength={1000}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-full py-6 text-sm font-semibold uppercase tracking-widest"
      >
        {loading ? "ОТПРАВЛЯЕМ…" : "ОТПРАВИТЬ ЗАЯВКУ"}
      </Button>
    </form>
  );
};

export default BookingForm;
