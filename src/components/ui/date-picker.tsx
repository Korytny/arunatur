import * as React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
  /** Dates that are already booked and should be disabled */
  disabledDates?: Date[];
}

const DatePicker = ({ value, onChange, minDate, placeholder, id, required, disabledDates }: DatePickerProps) => {
  const date = value ? new Date(value) : undefined;
  const min = minDate ? new Date(minDate) : undefined;

  // Combine minDate and disabledDates into a single disabled function for react-day-picker
  const isDisabled = React.useCallback(
    (day: Date) => {
      if (min && day < min) return true;
      if (disabledDates) {
        const dayStr = format(day, "yyyy-MM-dd");
        return disabledDates.some((d) => format(d, "yyyy-MM-dd") === dayStr);
      }
      return false;
    },
    [min, disabledDates],
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "dd.MM.yyyy", { locale: ru })
          ) : (
            <span>{placeholder || "Выберите дату"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            if (d) {
              onChange(format(d, "yyyy-MM-dd"));
            }
          }}
          fromDate={min}
          disabled={isDisabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
