import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="border-b border-slate-200 bg-[radial-gradient(ellipse_at_0%_0%,rgba(34,211,238,0.2),transparent_42%),radial-gradient(ellipse_at_100%_0%,rgba(124,58,237,0.14),transparent_40%),linear-gradient(180deg,#eef4ff,#f8fafc)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-[radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.28),transparent_30%),radial-gradient(circle_at_8%_90%,rgba(124,58,237,0.32),transparent_32%),linear-gradient(128deg,#071426_0%,#1e3a8a_58%,#2563eb_140%)] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 py-14 sm:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">{text}</p>
        </div>
        <Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-100">
          预约沟通
        </Link>
      </div>
    </section>
  );
}

const visualTones = {
  blue: "bg-gradient-to-br from-blue-950 via-blue-600 to-sky-400 text-white",
  cyan: "bg-gradient-to-br from-cyan-800 via-cyan-400 to-cyan-100 text-slate-950",
  violet: "bg-gradient-to-br from-violet-950 via-violet-600 to-violet-300 text-white",
  amber: "bg-gradient-to-br from-amber-700 via-amber-400 to-amber-100 text-slate-950",
  ink: "bg-gradient-to-br from-slate-950 via-blue-900 to-blue-600 text-white",
} as const;

export function CaseVisual({
  tone,
  label,
  title,
  featured = false,
}: {
  tone: keyof typeof visualTones;
  label: string;
  title: string;
  featured?: boolean;
}) {
  return (
    <div className={`relative flex flex-col justify-end overflow-hidden p-6 ${featured ? "min-h-72" : "aspect-[16/10]"} ${visualTones[tone]}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.28),transparent_42%)]" />
      <p className="relative font-mono text-xs tracking-wider uppercase opacity-70">{label}</p>
      <p className="relative mt-1 font-semibold text-xl leading-snug">{title}</p>
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-800">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function FeatureCard({ title, text, icon, accent }: { title: string; text: string; icon?: ReactNode; accent?: string }) {
  return (
    <article className={`rounded-xl border border-slate-200 bg-white p-6 ${accent ?? ""}`}>
      {icon}
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}
