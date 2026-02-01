import { useState } from "react";
import Hero from "@/components/Hero";
import BookDemoModal from "@/components/BookDemoModal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={() => setIsBookDemoOpen(true)} />

      {/* Main Content */}
      <div className="pt-20">
        <section id="hero">
          <Hero onBookDemo={() => setIsBookDemoOpen(true)} />
        </section>





      </div>

      <Footer onBookDemo={() => setIsBookDemoOpen(true)} />

      <BookDemoModal open={isBookDemoOpen} onOpenChange={setIsBookDemoOpen} />
    </div >
  );
};

export default Index;
