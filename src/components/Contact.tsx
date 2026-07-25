import BookingForm from "@/components/BookingForm";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <AvailabilityCalendar />
            <div className="h-full">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
