import Link from "next/link";
import { BarChart3, ListChecks, FileText, ArrowRight } from "lucide-react";

const points = [
  { Icon: BarChart3, text: "A score for eight security areas" },
  { Icon: ListChecks, text: "What to fix first, with cost ranges" },
  { Icon: FileText, text: "A PDF for your board, insurer, or grant" },
];

/** Hero card that promotes the free self-assessment. */
export function AssessmentPromo() {
  return (
    <div className="w-full max-w-md lg:w-80 xl:w-[26rem] rounded-2xl border border-white/15 bg-white/10 p-6 shadow-soft backdrop-blur-sm sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-wider text-brass-500 font-serif">Free tool</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Security Self-Assessment</h2>
      <p className="mt-2 text-sm leading-6 text-white/75">
        About 25 questions in 20 minutes, with no account required. Find out where you stand before you spend anything.
      </p>
      <ul className="mt-5 space-y-3">
        {points.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-3 text-sm text-white/90">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brass-500/20 text-brass-500">
              <Icon className="h-4 w-4" />
            </span>
            {text}
          </li>
        ))}
      </ul>
      <Link
        href="/assessment"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-brass-500 px-5 py-3 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-brass-600 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        Take the free assessment
        <ArrowRight className="h-4 w-4" />
      </Link>
      <p className="mt-3 text-center text-xs text-white/55">Houses of worship, housing providers, schools, nonprofits, clinics</p>
    </div>
  );
}
