import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/site/marketing";

export const metadata: Metadata = {
  title: "关于 — 码上云的交付方式与协作节奏",
  description: "码上云由彩云网络科技有限公司运营，交付彩云 OA、在线教培、医疗、MES 与企业官网 CMS，前端覆盖 Web、微信小程序、Android、iOS 与鸿蒙。",
};

const steps = [
  { n: "01", title: "需求共创", text: "一起梳理业务目标、角色与现状约束，写出可执行的范围说明，而不是只收集愿望清单。", color: "text-blue-600" },
  { n: "02", title: "快速原型", text: "用可点击的流程或关键页面验证路径是否成立，尽早暴露信息架构与操作习惯问题。", color: "text-violet-600" },
  { n: "03", title: "敏捷交付", text: "按短周期发布可用增量，优先打通主流程。实现语言按场景进入，而不是先定技术再找需求。", color: "text-cyan-700" },
  { n: "04", title: "持续运营", text: "上线后承接缺陷、小改与监控支持，让系统跟着业务调整，并在合适节点评估 AI 赋能是否值得加入。", color: "text-amber-700" },
];

const products = [
  { title: "彩云 OA 系统", text: "办公审批、通知和权限。适合先把内部协作从表格里搬出来。", accent: "border-t-blue-600" },
  { title: "彩云在线教培系统", text: "直播课和录播课放在同一套排课与上课流程里。", accent: "border-t-cyan-400" },
  { title: "彩云医疗系统", text: "医院挂号、诊所就诊、健康体检，并与 HIS 对接。", accent: "border-t-violet-600" },
  { title: "MES 与官网 CMS", text: "生产现场的工单进度，以及企业官网的栏目和内容发布。前端按场景选择 Web、微信小程序、Android、iOS 或鸿蒙。", accent: "border-t-amber-400" },
];

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow="关于码上云"
        title="用可预期的交付方式，做中小企业的软件外包伙伴"
        lead="码上云由彩云网络科技有限公司运营。我们已经在做彩云 OA、在线教培、医疗、MES 和企业官网 CMS，并把它们做到 Web、微信小程序、Android、iOS 和鸿蒙上。"
      />
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold text-primary">交付方式</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">四个阶段，减少「做着做着跑偏」</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">每个阶段都有明确产出，方便双方确认：现在解决什么、下一步做什么、什么暂时不做。</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n} className="bg-white p-5">
              <div className={`font-mono text-sm ${step.color}`}>{step.n}</div>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold text-primary">产品积累</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">新项目可以站在已有系统上开工</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">不是每个需求都从空白页开始。相近的业务流程，可以复用我们已经交付过的结构和终端。</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {products.map((item) => (
              <article key={item.title} className={`rounded-xl border border-slate-200 border-t-4 bg-white p-6 ${item.accent}`}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <Link href="/cases" className="mt-8 inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold hover:border-primary">查看产品案例</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">协作原则</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">我们如何与客户一起工作</h2>
          </div>
          <p className="text-sm leading-7 text-slate-600">软件外包不是把问题扔给乙方。码上云更倾向于建立稳定的沟通节奏，让决策有据可查。</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["范围可见", "每一期写清「做 / 不做 / 待定」，变更走明确确认，避免口头加需求导致工期失真。"],
            ["用演示对齐", "定期演示可运行版本，用真实界面讨论，而不是只在文档里想象系统长什么样。"],
            ["可维护优先", "代码结构、环境与文档以「后续还能改」为标准，方便中小企业数字化长期演进。"],
          ].map(([title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="想先聊聊项目是否合适？" text="无需准备完整需求文档。说明业务背景与时间预期即可开始沟通。" />
    </main>
  );
}
