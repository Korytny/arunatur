import { useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO, isSameDay } from "date-fns";
import { ru } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { supabase } from "@/integrations/supabase/client";

interface BookingRange {
  from: Date;
  to: Date;
}

function expandBookings(rows: { check_in: string; check_out: string }[]): BookingRange[] {
  return rows.map((r) => ({
    from: parseISO(r.check_in),
    to: parseISO(r.check_out),
  }));
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const AvailabilityCalendar = () => {
  const { data: ranges } = useQuery({
    queryKey: ["booked-ranges"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("check_in, check_out");
      if (error) throw error;
      return expandBookings(data ?? []);
    },
    refetchInterval: 60_000,
    staleTime: 30_000,
  });

  const bookingRanges = useMemo(() => ranges ?? [], [ranges]);

  const isBooked = useCallback(
    (day: Date) => bookingRanges.some((r) => day >= r.from && day <= r.to),
    [bookingRanges],
  );

  const isRangeStart = useCallback(
    (day: Date) => bookingRanges.some((r) => isSameDay(day, r.from)),
    [bookingRanges],
  );

  const isRangeEnd = useCallback(
    (day: Date) => bookingRanges.some((r) => isSameDay(day, r.to)),
    [bookingRanges],
  );

  const isPastOrDisabled = useCallback((day: Date) => day < today, []);

  return (
    <div className="bg-background border border-border rounded-3xl p-6 md:p-8 shadow-elegant h-full flex flex-col">
      <h3 className="text-xl md:text-2xl font-light text-architectural mb-1">
        Занятые даты
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Цветные полосы показывают периоды бронирования.
      </p>

      <div className="flex justify-center flex-1">
        <DayPicker
          mode="single"
          selected={undefined}
          onSelect={() => {}}
          numberOfMonths={4}
          locale={ru}
          fromDate={today}
          modifiers={{
            booked: isBooked,
            rangeStart: (day) => isBooked(day) && isRangeStart(day),
            rangeEnd: (day) => isBooked(day) && isRangeEnd(day),
          }}
          modifiersClassNames={{
            booked: "!bg-primary/20",
            rangeStart: "!rounded-l-full",
            rangeEnd: "!rounded-r-full",
          }}
          disabled={isPastOrDisabled}
          classNames={{
            months: "grid grid-cols-2 gap-4",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button:
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 focus:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative",
            day: "h-9 w-9 p-0 font-normal rounded-md hover:bg-accent",
            day_selected:
              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
            day_today: "bg-accent/50 text-accent-foreground font-semibold",
            day_disabled: "text-muted-foreground opacity-30",
            day_outside: "text-muted-foreground opacity-40",
          }}
        />
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
