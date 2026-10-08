import Link from "next/link";
import { Building2, Sparkles, Workflow } from "lucide-react";
import { CaseVisual, CtaBand, TagList } from "@/components/site/marketing";

const services = [
  { href: "/services#web", title: "企业 Web 应用", text: "官网、业务门户与客户自助入口，兼顾品牌呈现与可扩展结构。", tone: "border-l-blue-600 hover:bg-blue-50" },
  { href: "/services#admin", title: "管理系统", text: "订单、库存、权限与内部协作后台，围绕真实岗位流程设计。", tone: "border-l-violet-600 hover:bg-violet-50" },
  { href: "/services#api", title: "后端与 API", text: "稳定接口、数据同步与第三方集成，让系统之间可协作。", tone: "border-l-cyan-400 hover:bg-cyan-50" },
  { href: "/services#ops", title: "持续运营", text: "上线后的缺陷响应、小需求迭代与监控维护，保持系统可用。", tone: "border-l-amber-400 hover:bg-amber-50" },
];

const cases = [
  { tone: "blue" as const, label: "01", title: "彩云 OA 系统", text: "把审批、通知和权限收进同一套办公协同系统，减少表格和即时消息来回传。", tags: ["办公协同", "Web / App"] },
  { tone: "cyan" as const, label: "02", title: "彩云在线教培", text: "面向教培机构的在线课堂，同时支持直播课和录播课，方便排课、上课和回看。", tags: ["直播课", "录播课"] },
  { tone: "violet" as const, label: "03", title: "彩云医疗系统", text: "覆盖医院挂号、诊所就诊和健康体检，并与医院现有 HIS 对接，避免另起一套孤岛。", tags: ["挂号就诊", "HIS 对接"] },
  { tone: "amber" as const, label: "04", title: "MES 系统", text: "面向生产现场的制造执行系统，把工单、工序和现场进度放在同一条链路上。", tags: ["制造执行", "现场协同"] },
  { tone: "ink" as const, label: "05", title: "企业官网 CMS", text: "给企业官网一套可运营的内容系统，栏目、页面和发布流程由业务人员自己维护。", tags: ["官网", "内容发布"] },
];

const tiles = [
  { title: "一对一", text: "项目范围、阶段产出和变更都对着具体业务谈，而不是只交一份报价单。", className: "bg-gradient-to-br from-blue-700 to-blue-500" },
  { title: "可复用", text: "审批、排课、挂号、工单和内容发布，相近流程可以站在已有结构上开工。", className: "bg-gradient-to-br from-cyan-500 to-cyan-300 text-slate-950" },
  { title: "AI 进流程", text: "摘要、分类、检索和辅助填写嵌进重复劳动多的环节，并保留人工复核。", className: "bg-gradient-to-br from-violet-700 to-violet-500" },
  { title: "多端一起交", text: "Web、微信小程序、Android、iOS、鸿蒙按使用场景组合，数据走同一套接口。", className: "bg-gradient-to-br from-slate-950 to-slate-800" },
];

const iconClass = "mb-6 grid size-10 place-items-center rounded-lg border";

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <section className="bg-[radial-gradient(circle_at_8%_18%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_92%_8%,rgba(124,58,237,0.16),transparent_34%),linear-gradient(180deg,#f3f7ff_0%,#fff_72%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold text-primary">软件外包 · 中小企业数字化</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">把业务做到线上，用可交付的工程落地</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              码上云为中小企业交付可上线的业务系统。产品线包括彩云 OA、在线教培、医疗、MES 与企业官网 CMS；前端覆盖 Web、微信小程序、Android、iOS 与鸿蒙。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-primary-hover">预约沟通</Link>
              <Link href="/services" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 hover:border-primary">查看服务</Link>
            </div>
          </div>
          <aside className="rounded-xl bg-slate-950 p-5 text-white shadow-xl" aria-label="交付能力示意">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-rose-400" />
              <span className="size-2 rounded-full bg-amber-300" />
              <span className="size-2 rounded-full bg-emerald-400" />
              <span className="ml-auto font-mono text-[11px] tracking-widest text-white/50">DELIVERY / STACK</span>
            </div>
            <div className="grid min-h-52 grid-cols-2 gap-3">
              <div className="row-span-2 flex flex-col justify-end rounded-xl bg-gradient-to-br from-blue-700 to-sky-400 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/70">工程底座</span>
                <strong className="mt-2 text-xl font-semibold leading-snug">按业务组合，不从零开始</strong>
                <span className="mt-2 text-sm text-white/85">权限 · 表单 · 消息 · CMS · API</span>
              </div>
              <div className="flex flex-col justify-end rounded-xl bg-gradient-to-br from-cyan-300 to-cyan-200 p-4 text-cyan-950">
                <span className="font-mono text-[11px] uppercase tracking-wider opacity-70">多端</span>
                <strong className="mt-1 text-lg font-semibold">Web 到鸿蒙</strong>
              </div>
              <div className="flex flex-col justify-end rounded-xl bg-gradient-to-br from-violet-700 to-violet-500 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/70">AI</span>
                <strong className="mt-1 text-lg font-semibold">嵌进真实流程</strong>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Web", "微信小程序", "Android", "iOS", "鸿蒙"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs">{item}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-label="交付范围">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["五条产品线", "OA、教培、医疗、MES、CMS", "text-blue-600"],
            ["五个终端", "Web、小程序、Android、iOS、鸿蒙", "text-cyan-600"],
            ["多种语言", "按场景选型，不限定技术栈", "text-violet-600"],
            ["全周期", "从第一版上线到持续运营", "text-amber-600"],
          ].map(([value, label, color], index) => (
            <div key={value} className={`px-5 py-6 text-center ${index ? "border-slate-200 sm:border-l" : ""} ${index > 1 ? "border-t sm:border-t-0 lg:border-t-0" : ""} ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}>
              <div className={`text-xl font-semibold ${color}`}>{value}</div>
              <div className="mt-1 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold text-primary">为什么选择码上云</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">三条能说清的交付优势</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">不靠空泛承诺，而是用技术选型、协作节奏与上线后的持续运营，降低中小企业数字化的不确定性。</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <div className={`${iconClass} border-blue-100 bg-blue-50 text-blue-600`}><Workflow className="size-5" /></div>
              <h3 className="text-lg font-semibold">多语言交付</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">按业务形态选择合适的语言，而不是用单一技术栈硬套所有项目，减少后期改造成本。</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <div className={`${iconClass} border-violet-100 bg-violet-50 text-violet-600`}><Sparkles className="size-5" /></div>
              <h3 className="text-lg font-semibold">AI 赋能落地</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">把识别、摘要、检索与辅助决策嵌进真实流程，先解决重复劳动与响应效率，再谈更大范围的智能化。</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <div className={`${iconClass} border-cyan-100 bg-cyan-50 text-cyan-700`}><Building2 className="size-5" /></div>
              <h3 className="text-lg font-semibold">服务中小企业转型</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">从能上线的第一版开始，控制范围与节奏，让系统跟着业务成长，而不是一次做满、长期难用。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">服务摘要</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">从业务入口到后台与接口，一条交付链路</h2>
          </div>
          <p className="text-sm leading-7 text-slate-600">企业需要的不只是页面，而是可运营的系统。我们覆盖 Web 应用、管理后台、后端 API 与上线后的持续迭代。</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
          {services.map((item) => (
            <Link key={item.href} href={item.href} className={`grid gap-2 border-b border-l-4 border-slate-200 px-5 py-5 last:border-b-0 sm:grid-cols-[1.1fr_2fr_auto] sm:items-center ${item.tone}`}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.text}</p>
              <span className="text-sm font-medium">了解详情 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold text-primary">产品与案例</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">五个已经在做的产品方向</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">这些是码上云手头的项目，用来说明我们交付过的业务类型。页面不写未经确认的客户名称和成果数字。</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <CaseVisual tone={item.tone} label={item.label} title={item.title} />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                  <TagList tags={item.tags} />
                </div>
              </article>
            ))}
          </div>
          <Link href="/cases" className="mt-8 inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold hover:border-primary">查看全部产品案例</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold text-primary">怎么一起做</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">先把主流程跑通，再按业务往上加</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">中小企业更需要一个能上线、能改、能看懂的第一版。语言和终端都按场景选，不先定技术再找需求。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((item) => (
            <article key={item.title} className={`flex min-h-44 flex-col justify-end rounded-2xl p-5 text-white ${item.className}`}>
              <strong className="text-2xl font-semibold">{item.title}</strong>
              <span className="mt-2 text-sm leading-6 opacity-90">{item.text}</span>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="准备启动项目？先把需求说清楚" text="留下业务目标、现状与时间预期，我们会在工作日尽快回复，并给出适合的交付路径建议。" />
    </main>
  );
}
