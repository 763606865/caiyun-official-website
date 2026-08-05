"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Code2, Gauge, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { eyebrow: "企业软件定制开发", title: "把复杂需求，交付成可靠的软件产品", description: "从需求梳理、产品设计到研发上线与持续运营，彩云网络用可复用工程底座缩短交付周期，让每一次定制开发更稳、更快。", primary: "预约方案沟通", accent: "blue" },
  { eyebrow: "通用工程能力", title: "成熟代码模板，让业务快速启动", description: "沉淀 Web、管理后台、API 服务、权限体系与内容管理能力，用经过验证的前后端模板快速响应甲方功能需求。", primary: "了解开发服务", accent: "violet" },
  { eyebrow: "产品试用与在线工具", title: "从工具到产品，持续创造数字价值", description: "开放实用的在线工具与自营软件产品，为企业提供开箱即用、可按需扩展的数字化能力。", primary: "探索产品中心", accent: "cyan" },
];

const accentClass = { blue: "from-blue-600 to-blue-500", violet: "from-violet-600 to-blue-600", cyan: "from-cyan-500 to-blue-600" } as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6500); return () => window.clearInterval(timer); }, []);
  const slide = slides[active];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f8ff]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_24%,rgba(34,211,238,.16),transparent_28%),radial-gradient(circle_at_86%_15%,rgba(124,58,237,.15),transparent_30%)]" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"><Sparkles className="size-4 text-violet-500" />{slide.eyebrow}</div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.14] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{slide.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{slide.description}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/#contact" className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accentClass[slide.accent as keyof typeof accentClass]} px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20`}>{slide.primary}<ArrowRight className="size-4" /></Link>
            <Link href="/#products" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-primary hover:text-primary">查看产品能力</Link>
          </div>
          <div className="mt-12 flex items-center gap-3" aria-label="轮播图控制">
            {slides.map((item, index) => <button key={item.title} type="button" onClick={() => setActive(index)} aria-label={`查看第 ${index + 1} 张：${item.eyebrow}`} aria-current={index === active} className={`h-1.5 rounded-full transition-all ${index === active ? "w-12 bg-primary" : "w-5 bg-slate-300 hover:bg-slate-400"}`} />)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-300/30 via-blue-300/10 to-violet-400/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 p-4 shadow-2xl shadow-blue-950/20">
            <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4"><span className="size-2.5 rounded-full bg-rose-400" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-400" /><span className="ml-3 text-xs text-slate-500">caiyun delivery platform</span></div>
            <div className="grid gap-3 p-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white sm:row-span-2"><Code2 className="size-9" /><div className="mt-16 text-3xl font-bold">可复用<br />工程底座</div><p className="mt-3 text-sm leading-6 text-blue-100">前端 · 后端 · CMS · 权限 · API</p></div>
              {[{ icon: Gauge, title: "快速交付", text: "标准能力即插即用" }, { icon: ShieldCheck, title: "稳定可靠", text: "质量流程全程可控" }].map((item, index) => <div key={item.title} className={`rounded-2xl p-5 ${index ? "bg-violet-500" : "bg-cyan-400"} ${index ? "text-white" : "text-slate-950"}`}><item.icon className="size-7" /><h2 className="mt-7 text-xl font-bold">{item.title}</h2><p className={`mt-1 text-sm ${index ? "text-violet-100" : "text-cyan-950/70"}`}>{item.text}</p></div>)}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl"><div className="grid size-9 place-items-center rounded-xl bg-violet-100 text-violet-600"><Boxes className="size-5" /></div><div><div className="text-xs text-slate-500">能力组件</div><div className="text-sm font-bold text-slate-900">持续沉淀 · 随需组合</div></div></div>
          <Layers3 className="absolute -right-7 top-14 size-14 rotate-12 text-cyan-400 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}
