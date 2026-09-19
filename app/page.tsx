import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Why from "@/components/why";
import Statistic from "@/components/statistic";
import Footer from "@/components/footer";

export default function HOME() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Why />
      <Statistic />
      <Footer />
    </main>
  );
}