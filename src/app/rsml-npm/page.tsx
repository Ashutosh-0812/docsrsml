import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "RSML npm",
  description: "JavaScript/TypeScript library for working with RSML.",
  alternates: { canonical: "/rsml-npm" },
};

export default function Page() {
  return <PageShell title="RSML npm" summary="JavaScript/TypeScript library for working with RSML." />;
}
