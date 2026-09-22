import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Ecosystem } from "@/components/Ecosystem";
import { ResearchHighlights } from "@/components/ResearchHighlights";
import { Publications } from "@/components/Publications";
import { Facilities } from "@/components/Facilities";
import { Funding } from "@/components/Funding";
import { Opportunities } from "@/components/Opportunities";
import { Collaboration } from "@/components/Collaboration";
import { Contact } from "@/components/Contact";
import { AcademicProfile } from "@/components/AcademicProfile";
import { Footer } from "@/components/Footer";
import { BackToTop, ScrollProgress } from "@/components/Chrome";
import { PhotoProvider } from "@/components/PhotoProvider";

export default function App() {
  return (
    <PhotoProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Ecosystem />
        <ResearchHighlights />
        <AcademicProfile />
        <Publications />
        <Facilities />
        <Funding />
        <Opportunities />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PhotoProvider>
  );
}
