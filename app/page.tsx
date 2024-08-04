import Contact from "@/components/contact";
import FaqSection from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PricingPage from "@/components/pricing";
import Solution from "@/components/solution";
import Testimonials from "@/components/testimonials";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <PricingPage />
      <Testimonials />
      <FaqSection />
      <Contact />
      <Footer/>
    </div>
  );
}
