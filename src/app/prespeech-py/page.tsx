import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "PreSpeech (Py)",
  description: "Python library for preprocessing and preparing speech data.",
  alternates: { canonical: "/prespeech-py" },
};

export default function Page() {
  return <PageShell title="PreSpeech (Py)" summary="Python library for preprocessing and preparing speech data." />;
}
