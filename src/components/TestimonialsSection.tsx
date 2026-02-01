import { Card } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "breeh has been instrumental in my startup practice's",
      highlight: "growth and success.",
      fullText: "It offers 24/7 availability, allowing my patients to book specific appointments or be connected to staff whenever needed. The system handles routine calls seamlessly, giving our team more time to focus on patient care. I look forward to utilizing breeh in my practice for years to come.",
      author: "Alexander Akbari, DDS",
      role: "Pediatric Dentist",
      company: "All Star Pediatric Dentistry",
      badge: "PEDIATRIC DENTIST",
      initials: "AA",
      imageUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww",
      logoUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww"
    },
    {
      quote: "The AI receptionist has transformed",
      highlight: "our patient experience.",
      fullText: "We've seen a significant increase in appointment bookings and our staff can now focus on in-office patients. The integration with our PMS was seamless and the ROI has been incredible.",
      author: "Dr. Mitchel Johnson",
      role: "Practice Owner",
      company: "Smile Dental Care",
      badge: "GENERAL DENTIST",
      initials: "SJ",
      imageUrl:
        "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ucyUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
      logoUrl:
        "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ucyUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
      quote: "Best investment we've made for",
      highlight: "operational efficiency.",
      fullText: "breeh handles after-hours calls perfectly and never misses a beat. Our patients love the instant responses and our team loves the reduced workload. Highly recommend!",
      author: "Dr. Michael Chen",
      role: "Orthodontist",
      company: "Chen Orthodontics",
      badge: "ORTHODONTIST",
      initials: "MC",
      imageUrl:
        "https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      logoUrl:
        "https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <Quote className="w-7 h-7 text-primary mb-3" />
              <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">WHAT DENTISTS SAY ABOUT breeh</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {current.quote} <span className="text-primary">{current.highlight}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">{current.fullText}</p>

            {/* Avatars navigation */}
            <div className="flex items-center gap-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-12 h-12 rounded-full ring-2 transition-all overflow-hidden ${
                      i === currentIndex ? "ring-primary" : "ring-border hover:ring-primary/60"
                    }`}
                    title={t.author}
                  >
                    <img src={t.imageUrl} alt={t.author} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right image card with badge */}
          <div className="justify-self-center w-full max-w-lg">
            <Card className="relative overflow-hidden rounded-3xl shadow-xl">
              <img src={current.imageUrl} alt={current.author} className="block w-full h-[360px] md:h-[420px] object-cover" />

              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur border rounded-2xl p-3 md:p-4 shadow-md flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">{current.initials}</div>
                    <div>
                      <div className="font-semibold">{current.author}</div>
                      <div className="text-xs text-muted-foreground">{current.company}</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-24 h-10 rounded-lg overflow-hidden bg-white/70 border">
                      <img
                        src={current.imageUrl}
                        alt={current.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
