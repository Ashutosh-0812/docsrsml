import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "RSML",
  description: "Rich Speech Markup Language for rich transcription and annotation.",
  alternates: { canonical: "/rsml" },
};

export default function Page() {
  return <PageShell title="RSML" summary="Rich Speech Markup Language for rich transcription and annotation." />;
}
