import Hero from "./Components/Home/Hero";
import ValueProp from "./Components/Home/ValueProp";
import Services from "./Components/Home/Services";
import ProjectShowcase from "./Components/Home/ProjectShowcase";
import CTA from "./Components/Home/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ValueProp />
      <Services />
      <ProjectShowcase />
      <CTA />
    </main>
  );
}
