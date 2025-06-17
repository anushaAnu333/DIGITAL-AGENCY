import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Portfolio />
      <Testimonials />
      <Team />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
