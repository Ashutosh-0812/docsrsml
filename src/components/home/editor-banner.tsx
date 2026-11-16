import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function EditorBanner() {
  return (
    <section aria-labelledby="editor-heading" className="mx-auto mt-8 w-full max-w-7xl px-5 pb-16 sm:px-8">
      <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <SquarePen size={40} strokeWidth={1.5} className="shrink-0 text-slate-800" aria-hidden="true" />
          <div>
            <h2 id="editor-heading" className="text-2xl font-bold tracking-tight text-slate-950">
              Rich Speech Editor
            </h2>
            <p className="mt-1 text-slate-600">
              A web-based editor for creating, viewing, and annotating RSML transcripts.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Button href={SITE.editorUrl} variant="outline" external className="!border-blue-700 !text-blue-700 hover:!bg-blue-50">
            Open Editor
          </Button>
          <span className="text-slate-700">editor.richspeech.org</span>
        </div>
      </div>
    </section>
  );
}
