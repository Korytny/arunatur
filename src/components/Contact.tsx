import { useState } from "react";
import BookingForm from "@/components/BookingForm";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

const Contact = () => {
  const [dates, setDates] = useState({ check_in: "", check_out: "" });

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-architectural">
              ОПОВЕСТИТЕ НАС О ДАТАХ СВОЕГО ПРИЕЗДА
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <AvailabilityCalendar
              onDateSelect={setDates}
              selectedCheckIn={dates.check_in}
              selectedCheckOut={dates.check_out}
            />
            <div className="h-full">
              <BookingForm {...dates} onDatesChange={setDates} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
