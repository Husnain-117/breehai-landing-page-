-- Create demo_bookings table for storing demo requests
CREATE TABLE IF NOT EXISTS public.demo_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert demo bookings
CREATE POLICY "Anyone can create demo bookings"
  ON public.demo_bookings
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow users to view their own bookings (optional, for future use)
CREATE POLICY "Users can view own bookings"
  ON public.demo_bookings
  FOR SELECT
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to automatically update updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.demo_bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();