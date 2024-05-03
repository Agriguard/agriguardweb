import { Flex } from "@chakra-ui/react";
import HeroSection from "./components/sections/hero/HeroSection";
import ResponsiveNavbar from "./components/sections/navbar/ResponsiveNavbar";
import Problem from "./components/sections/problem/ProblemSection";
import Stats from "./components/sections/problem/Stats";
import SolutionSection from "./components/sections/solution/SolutionSection";
import Features from "./components/sections/features/Features";
import Pricing from "./components/sections/pricing/Pricing";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Press from "./components/sections/press/Press";
import Journey from "./components/sections/journey/Journey";
import FaqSection from "./components/sections/faqs/FaqSection";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/sections/footer/Footer";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Flex px={{ base: "1rem", lg: "5rem" }} flexDir="column" gap={32}>
        <HeroSection />
        <Problem />
        <Stats />
        <SolutionSection />
        <Features />
        <Pricing />
        <Testimonials />
      </Flex>
      <Press />
      <Flex px={{ base: "1rem", lg: "5rem" }} flexDir="column" gap={32}>
        <Journey />
        <FaqSection />
        <Contact />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
