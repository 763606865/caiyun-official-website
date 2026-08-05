import Link from "next/link";
import { ArrowRight, Bot, Boxes, Braces, Check, ChevronRight, CloudCog, CodeXml, DatabaseZap, ExternalLink, FileCode2, Gauge, Globe2, Headphones, Layers3, LifeBuoy, MessageSquareText, MonitorSmartphone, Puzzle, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import { HeroCarousel } from "@/components/site/hero-carousel";

const services = [
  { icon: MonitorSmartphone, title: "企业 Web 应用", text: "官网、业务门户、营销活动与复杂交互应用，从设计到上线一站式交付。", color: "blue" },
  { icon: Layers3, title: "管理系统与 CMS", text: "围绕内容、客户与业务流程构建高效、易维护的企业管理平台。", color: "violet" },
  { icon: DatabaseZap, title: "后端与开放 API", text: "稳定的服务端架构、数据模型与第三方系统集成，支撑业务持续演进。", color: "cyan" },
  { icon: Headphones, title: "持续运营与运维", text: "版本迭代、数据分析、性能优化与安全维护，让产品持续创造价值。", color: "amber" },
];

const products = [
  { tag: "内容运营", title: "企业级 CMS 内容中台", text: "多站点、多栏目、多角色协作，让品牌内容高效生产与分发。", icon: CloudCog, tone: "from-blue-600 to-blue-500" },
  { tag: "快速构建", title: "通用业务开发套件", text: "认证、权限、表单、文件、消息等高频模块按需组合，减少重复开发。", icon: Puzzle, tone: "from-violet-600 to-fuchsia-500" },
  { tag: "效率工具", title: "在线工具与开放能力", text: "聚合实用开发和办公工具，并逐步开放产品 API 与试用体验。", icon: Braces, tone: "from-cyan-500 to-teal-400" },
];

const process = [
  { number: "01", title: "需求共创", text: "梳理业务目标与优先级，形成清晰可落地的产品方案。" },
  { number: "02", title: "快速原型", text: "基于成熟模板搭建原型，尽早验证关键流程与体验。" },
  { number: "03", title: "敏捷交付", text: "分阶段开发、测试和验收，过程透明，进度持续可见。" },
  { number: "04", title: "持续运营", text: "上线后持续优化功能、性能和数据表现，陪伴业务成长。" },
];

export default function HomePage() {
  return (
    <main className="flex-1 overflow-hidden bg-white">
      <HeroCarousel />

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-8 sm:grid-cols-4 sm:px-8">
          {[['10+', '通用业务模块'], ['全周期', '产品研发服务'], ['7×24', '系统稳定守护'], ['持续', '产品运营迭代']].map(([value, label]) => <div key={label} className="px-5 py-4 text-center"><div className="text-2xl font-bold text-slate-950 sm:text-3xl">{value}</div><div className="mt-1 text-sm text-slate-500">{label}</div></div>)}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="section-kicker">DEVELOPMENT SERVICES</p><h2 className="section-title">从想法到上线，覆盖软件全生命周期</h2><p className="section-description">不只完成一个项目，更为企业建立可持续演进的软件能力。</p></div>
          <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">获取定制开发方案<ArrowRight className="size-4" /></Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <article key={service.title} className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/8"><div className={`grid size-13 place-items-center rounded-2xl icon-${service.color}`}><service.icon className="size-6" /></div><h3 className="mt-8 text-xl font-bold text-slate-950">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p><ChevronRight className="mt-7 size-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" /></article>)}
        </div>
      </section>

      <section id="products" className="relative bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,.18),transparent_35%),radial-gradient(circle_at_8%_70%,rgba(34,211,238,.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-kicker text-cyan-300">PRODUCTS & CAPABILITIES</p><h2 className="section-title max-w-3xl text-white">成熟产品能力，让每次定制开发站在更高起点</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => <article key={product.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm"><div className={`relative h-52 overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${product.tone} p-7`}><div className="absolute -bottom-12 -right-10 size-44 rounded-full border-[28px] border-white/10" /><product.icon className="size-10" /><div className="absolute bottom-6 left-7 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">{product.tag}</div><span className="absolute right-6 top-6 font-mono text-xs text-white/60">0{index + 1}</span></div><div className="p-6"><h3 className="text-xl font-bold">{product.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{product.text}</p><Link href="/#trial" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">查看产品<ExternalLink className="size-4" /></Link></div></article>)}
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px] rounded-[2rem] bg-[#eef6ff] p-6 sm:p-10">
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(rgba(37,99,235,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="relative ml-auto w-[92%] rounded-3xl border border-white bg-white p-5 shadow-2xl shadow-blue-900/15"><div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-xs text-slate-400">PROJECT OVERVIEW</p><h3 className="mt-1 font-bold">项目交付工作台</h3></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">进度正常</span></div><div className="mt-5 grid grid-cols-3 gap-3">{['需求', '开发', '验收'].map((item, index) => <div key={item} className={`rounded-xl p-3 ${index === 1 ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-700'}`}><div className="text-xs opacity-60">阶段 0{index + 1}</div><div className="mt-5 text-sm font-bold">{item}</div></div>)}</div><div className="mt-5 space-y-3">{[82, 68, 94].map((width, index) => <div key={width}><div className="mb-1.5 flex justify-between text-xs text-slate-500"><span>{['前端应用', 'API 服务', '质量验证'][index]}</span><span>{width}%</span></div><div className="h-2 rounded-full bg-slate-100"><div className={`h-full rounded-full ${index === 1 ? 'bg-violet-500' : index === 2 ? 'bg-cyan-400' : 'bg-blue-600'}`} style={{width:`${width}%`}} /></div></div>)}</div></div>
          <div className="relative mt-5 w-[74%] rounded-2xl bg-slate-950 p-5 text-white shadow-xl"><FileCode2 className="size-7 text-cyan-300" /><p className="mt-5 text-sm font-semibold">标准模块复用率</p><p className="mt-1 text-3xl font-bold">60%<span className="ml-2 text-xs font-normal text-emerald-300">交付提速</span></p></div>
        </div>
        <div><p className="section-kicker">ENGINEERING FOUNDATION</p><h2 className="section-title">工程化底座，兼顾速度与长期维护</h2><p className="section-description">面对频繁变化的甲方需求，我们将通用能力沉淀为标准模块，同时保留灵活扩展空间。</p><div className="mt-9 grid gap-5 sm:grid-cols-2">{[{ icon: Boxes, title: '组件化复用', text: '通用 UI 与业务模块灵活组合' }, { icon: ShieldCheck, title: '安全与质量', text: '类型安全、异常治理与质量门禁' }, { icon: Rocket, title: '敏捷交付', text: '快速原型、分段上线、持续反馈' }, { icon: LifeBuoy, title: '长期可维护', text: '清晰架构、统一规范、完整文档' }].map((item) => <div key={item.title} className="flex gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary"><item.icon className="size-5" /></div><div><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p></div></div>)}</div></div>
      </section>

      <section id="about" className="bg-blue-50/70 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="text-center"><p className="section-kicker">HOW WE DELIVER</p><h2 className="section-title">透明、敏捷、持续的项目协作方式</h2></div><div className="relative mt-14 grid gap-5 md:grid-cols-4"><div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 md:block" />{process.map((step, index) => <article key={step.number} className="relative rounded-2xl border border-white bg-white p-6 shadow-sm"><div className={`relative z-10 grid size-12 place-items-center rounded-2xl text-sm font-bold text-white ${index % 2 ? 'bg-violet-500' : 'bg-primary'}`}>{step.number}</div><h3 className="mt-7 text-lg font-bold text-slate-950">{step.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p></article>)}</div></div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="section-kicker">WHY CAIYUN</p><h2 className="section-title">不止写代码，更理解业务如何落地</h2><p className="section-description">以客户目标为中心，把产品、技术和运营放在同一张路线图上。</p><ul className="mt-8 grid gap-4">{['成熟模板减少重复投入', '过程透明，关键节点可验收', '专属团队持续响应需求', '上线后持续运营和迭代'].map((item) => <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700"><span className="grid size-6 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Check className="size-3.5" /></span>{item}</li>)}</ul></div><div className="grid gap-5 sm:grid-cols-2">{[{ icon: Users, value: '一对一', label: '项目顾问全程协同', color: 'bg-blue-600' }, { icon: Gauge, value: '更快速', label: '复用底座缩短启动周期', color: 'bg-cyan-400 text-slate-950' }, { icon: Bot, value: '智能化', label: 'AI 与自动化融入流程', color: 'bg-violet-500' }, { icon: Globe2, value: '全场景', label: '网站、工具、系统与产品', color: 'bg-slate-900' }].map((item) => <div key={item.value} className={`rounded-3xl p-7 text-white ${item.color}`}><item.icon className="size-7" /><div className="mt-10 text-3xl font-bold">{item.value}</div><div className="mt-2 text-sm opacity-75">{item.label}</div></div>)}</div></div>
      </section>

      <section id="contact" className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative p-8 sm:p-12 lg:p-16"><div className="absolute -left-20 -top-20 size-64 rounded-full bg-blue-600/25 blur-3xl" /><div className="relative"><p className="section-kicker text-cyan-300">LET’S BUILD TOGETHER</p><h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">告诉我们你的想法，<br />一起把它变成产品</h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-400">提交项目需求后，业务顾问会尽快与你联系，提供初步建议与合作方案。</p><div className="mt-10 grid gap-4 text-sm text-slate-300"><span className="flex items-center gap-3"><MessageSquareText className="size-5 text-cyan-300" />需求梳理与方案建议</span><span className="flex items-center gap-3"><CodeXml className="size-5 text-violet-300" />技术路径与周期评估</span><span className="flex items-center gap-3"><Sparkles className="size-5 text-blue-300" />产品试用与能力演示</span></div></div></div>
          <div id="trial" className="m-3 rounded-[1.4rem] bg-white p-7 text-slate-900 sm:p-10"><h3 className="text-xl font-bold">预约项目咨询</h3><p className="mt-2 text-sm text-slate-500">请留下联系方式和简要需求</p><form className="mt-7 grid gap-5 sm:grid-cols-2"><label className="form-field"><span>姓名 *</span><input required name="name" placeholder="怎么称呼您" /></label><label className="form-field"><span>手机号码 *</span><input required name="phone" type="tel" placeholder="请输入手机号码" /></label><label className="form-field"><span>公司名称</span><input name="company" placeholder="所在企业或团队" /></label><label className="form-field"><span>需求类型</span><select name="type" defaultValue=""><option value="" disabled>请选择</option><option>官网 / CMS</option><option>Web / 管理系统</option><option>移动应用</option><option>产品试用</option><option>其他需求</option></select></label><label className="form-field sm:col-span-2"><span>项目需求</span><textarea name="message" rows={4} placeholder="请简要描述业务目标、核心功能或预期上线时间" /></label><label className="flex items-start gap-2 text-xs leading-5 text-slate-500 sm:col-span-2"><input required type="checkbox" className="mt-0.5" />我已阅读并同意隐私政策，授权彩云网络与我联系</label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-hover sm:col-span-2">提交需求<ArrowRight className="size-4" /></button></form></div>
        </div>
      </section>
    </main>
  );
}
