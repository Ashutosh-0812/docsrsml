import { Hero } from "@/components/home/hero";
import { EcosystemCards } from "@/components/home/ecosystem-cards";
import { EditorBanner } from "@/components/home/editor-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemCards />
      <EditorBanner />
    </>
  );
}
