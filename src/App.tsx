import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Ecosystem } from "@/components/Ecosystem";
import { ResearchHighlights } from "@/components/ResearchHighlights";
import { Publications } from "@/components/Publications";
import { Facilities } from "@/components/Facilities";
import { News } from "@/components/News";
import { Gallery } from "@/components/Gallery";
import { Funding } from "@/components/Funding";
import { Opportunities } from "@/components/Opportunities";
import { JoinUs } from "@/components/JoinUs";
import { Collaboration } from "@/components/Collaboration";
import { Contact } from "@/components/Contact";
import { AcademicProfile } from "@/components/AcademicProfile";
import { Footer } from "@/components/Footer";
import { BackToTop, ScrollProgress } from "@/components/Chrome";
import { PhotoProvider } from "@/components/PhotoProvider";
import { ConstructionBanner } from "@/components/ConstructionBanner";

export default function App() {
  return (
    <PhotoProvider>
      <ScrollProgress />
      <ConstructionBanner />
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
        <News />
        <Gallery />
        <Funding />
        <Opportunities />
        <JoinUs />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Analytics />
    </PhotoProvider>
  );
}
