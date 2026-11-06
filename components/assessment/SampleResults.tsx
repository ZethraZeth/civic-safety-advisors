/** Static mock of the results screen, styled like the live tool. Numbers are illustrative. */

const domains: Array<[string, number]> = [
  ["Governance", 3.7],
  ["Emergency Response", 3.3],
  ["Training & Awareness", 2.8],
  ["Physical Security", 2.2],
  ["People & Interactions", 1.9],
];

const actions: Array<[string, string, "High" | "Medium"]> = [
  ["Write down who may have keys and codes, and collect them when people leave.", "$", "High"],
  ["Give front-desk staff a script and a signal for aggressive visitors.", "$", "High"],
  ["Replace burned-out exterior lights and add fixtures at the staff entrance.", "$$", "Medium"],
];

function bandOf(v: number) {
  return v < 2.5 ? "Low" : v < 3.75 ? "Medium" : "High";
}
const bandColor: Record<string, string> = { Low: "#dc2626", Medium: "#d97706", High: "#15803d" };
const bandBg: Record<string, string> = { Low: "bg-red-50 text-red-700 border-red-200", Medium: "bg-amber-50 text-amber-700 border-amber-200", High: "bg-green-50 text-green-700 border-green-200" };

export function SampleResults() {
  const overall = 2.8;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6" aria-label="Sample assessment results">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Results · Housing provider · Fairfield County</p>
          <p className="mt-1 text-2xl font-bold text-ink-900">Overall: {overall.toFixed(1)} <span className="text-base font-semibold text-amber-700">Medium</span></p>
        </div>
        <span className="rounded border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-600">PDF emailed</span>
      </div>

      {/* Overall bar with band markers */}
      <div className="relative mt-3 h-2.5 w-full rounded bg-slate-200">
        <div className="absolute inset-y-0 left-0 rounded bg-brass-500" style={{ width: `${((overall - 1) / 4) * 100}%` }} />
        <span className="absolute -top-1 bottom-0 w-px bg-slate-400" style={{ left: `${((2.5 - 1) / 4) * 100}%` }} />
        <span className="absolute -top-1 bottom-0 w-px bg-slate-400" style={{ left: `${((3.75 - 1) / 4) * 100}%` }} />
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-slate-500"><span>1 Not in place</span><span>Low | Medium | High</span><span>5 Reviewed</span></div>

      <div className="mt-5 space-y-2">
        {domains.map(([name, v]) => {
          const b = bandOf(v);
          return (
            <div key={name} className="grid grid-cols-[9.5rem_1fr_auto] items-center gap-3 text-xs sm:grid-cols-[10.5rem_1fr_auto]">
              <span className="truncate font-semibold text-ink-900">{name}</span>
              <div className="h-2 w-full rounded bg-slate-200">
                <div className="h-2 rounded" style={{ width: `${((v - 1) / 4) * 100}%`, backgroundColor: bandColor[b] }} />
              </div>
              <span className={`w-[4.75rem] whitespace-nowrap rounded border px-1.5 py-0.5 text-center text-[10px] font-semibold ${bandBg[b]}`}>{b} {v.toFixed(1)}</span>
            </div>
          );
        })}
        <p className="text-[11px] text-slate-400">+ 3 more areas</p>
      </div>

      <div className="mt-5 border-t border-slate-200 pt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-ink-900">Do these first</p>
        <ul className="mt-2 space-y-2">
          {actions.map(([t, cost, impact]) => (
            <li key={t} className="flex items-start gap-2 text-xs text-slate-700">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: impact === "High" ? "#dc2626" : "#d97706" }} aria-label={`${impact} impact`} />
              <span className="flex-1 leading-5">{t}</span>
              <span className="shrink-0 font-mono text-[11px] font-semibold text-slate-500">{cost}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] text-slate-400">Dot = impact. $ = staff time only, $$ = under $1,000, up to $$$$.</p>
      </div>
    </div>
  );
}
