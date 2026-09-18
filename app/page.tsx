import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Services from "@/components/services";

export default function HOME() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
    </main>
  );
}