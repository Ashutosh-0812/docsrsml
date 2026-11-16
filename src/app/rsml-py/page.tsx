import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "RSML (Py)",
  description: "Python library for reading, writing, and manipulating RSML.",
  alternates: { canonical: "/rsml-py" },
};

export default function Page() {
  return <PageShell title="RSML (Py)" summary="Python library for reading, writing, and manipulating RSML." />;
}
