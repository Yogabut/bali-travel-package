import { Hero } from "@/components/Hero/Hero";
import {Stats} from "@/components/Stats/Stats"
import { About } from "@/components/About/About";
import { Package } from "@/components/Package/Package";
import { Testimonials } from "@/components/Testimonial/Testimoni";
import { ChatBotSection } from "@/components/ChatBot/ChatBot";
import { CTA } from "@/components/Contact/Contact";

export const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Package />
      <Testimonials />
      <ChatBotSection />
      <CTA />
    </div>
  );
};