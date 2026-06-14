ALTER TABLE public.bookings 
  ADD COLUMN needs_excursions boolean NOT NULL DEFAULT false,
  ADD COLUMN needs_meals boolean NOT NULL DEFAULT false,
  ADD COLUMN tariff text NOT NULL DEFAULT 'econom';

ALTER TABLE public.bookings
  ADD CONSTRAINT bookings_tariff_check CHECK (tariff IN ('econom','active','premium'));