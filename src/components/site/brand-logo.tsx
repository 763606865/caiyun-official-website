import Image from "next/image";
import { siteConfig } from "@/config/site";

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src="/brand-mark.svg" width={40} height={40} alt="" className="size-9 shrink-0" />
      <span className="leading-none">
        <span className={`block text-lg font-semibold tracking-normal ${inverted ? "text-white" : "text-slate-950"}`}>
          {siteConfig.name}
        </span>
        <span className={`mt-1 block font-mono text-[11px] tracking-normal ${inverted ? "text-slate-400" : "text-slate-500"}`}>
          {siteConfig.domain}
        </span>
      </span>
    </span>
  );
}
