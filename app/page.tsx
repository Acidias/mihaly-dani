import Nav from "@/components/nav";
import Hero from "@/components/hero";
import FeaturedWork from "@/components/featured-work";
import Research from "@/components/research";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AuroraBackground from "@/components/aurora-bg";

export default function Home() {
  return (
    <div className="relative noise">
      <AuroraBackground />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <div className="glow-line max-w-6xl mx-auto" />
          <FeaturedWork />
          <Research />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
