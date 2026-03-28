import { games } from "@/data/games";

const TOTAL = 1749;

const ProgressBar = () => {
  const played = games.filter(g => !g.countAs).length;
  const pct = (played / TOTAL) * 100;

  return (
    <div className="flex flex-col justify-center gap-[6px] w-[220px]">
      {/* Top row: dots + label */}
      <div className="flex items-center gap-[10px]">
        <div className="flex gap-[5px]">
          {["#2563c7", "#229954", "#d0222a", "#c8960c"].map((c) => (
            <div key={c} style={{ background: c }}
              className="w-[9px] h-[9px] rounded-full" />
          ))}
        </div>
        <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-muted-foreground">
          Progress
        </span>
      </div>

      {/* Bar */}
      <div className="w-full h-[10px] rounded-full overflow-hidden border border-[#cfc6bc]"
           style={{ background: "#d4c9bc" }}>
        <div
          className="h-full rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: `${pct}%`, background: "#3a3650" }}
        />
      </div>

      {/* Count */}
      <div className="flex items-baseline gap-[4px]">
        <span className="text-[18px] font-semibold" style={{ color: "#2a2840" }}>
          {played}
        </span>
        <span className="text-[11px] text-muted-foreground">/ {TOTAL}</span>
        <span className="text-[11px] text-muted-foreground ml-auto">
          {pct.toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
