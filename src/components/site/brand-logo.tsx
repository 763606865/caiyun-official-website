import { Code2 } from "lucide-react";

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="彩云网络科技有限公司">
      <span className="relative grid size-10 shrink-0 place-items-center">
        <span
          className={`absolute inset-x-0 bottom-1 h-7 rounded-[45%_45%_38%_38%] ${
            inverted ? "bg-white" : "bg-primary"
          }`}
        />
        <span
          className={`absolute left-2 top-1 size-6 rounded-full ${
            inverted ? "bg-white" : "bg-primary"
          }`}
        />
        <span
          className={`absolute right-1.5 top-3 size-2.5 rounded-full ring-2 ${
            inverted ? "bg-cyan-300 ring-blue-700" : "bg-cyan-400 ring-white"
          }`}
        />
        <span
          className={`absolute right-0.5 top-1.5 size-1.5 rounded-full ${
            inverted ? "bg-violet-300" : "bg-violet-500"
          }`}
        />
        <Code2
          aria-hidden
          className={`relative z-10 mt-1 size-5 ${inverted ? "text-primary" : "text-white"}`}
          strokeWidth={2.6}
        />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-bold tracking-[0.12em]">彩云网络</span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[0.2em] ${inverted ? "text-blue-100" : "text-slate-500"}`}>
          CAIYUN NETWORK
        </span>
      </span>
    </span>
  );
}
