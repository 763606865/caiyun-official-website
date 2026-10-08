import type { Metadata } from "next";
import { Braces, LayoutDashboard, Monitor, Settings2 } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site/marketing";

export const metadata: Metadata = {
  title: "服务 — 码上云软件外包与系统交付",
  description: "码上云软件外包覆盖 Web、微信小程序、Android、iOS 与鸿蒙，并交付彩云 OA、在线教培、医疗、MES 与企业官网 CMS。后端按业务场景选择合适的语言。",
};

const services = [
  { id: "web", icon: Monitor, tone: "border-blue-100 bg-blue-50 text-blue-600", title: "企业 Web 应用", text: "建设官网、业务门户与客户自助入口，也可以直接落在企业官网 CMS 上，让栏目和页面由业务人员发布。重点放在信息架构、表单流程与后续扩展空间。" },
  { id: "admin", icon: LayoutDashboard, tone: "border-violet-100 bg-violet-50 text-violet-600", title: "管理系统", text: "围绕审批、权限、工单和业务台账设计管理后台。彩云 OA、MES 和诊所就诊流程，都是先对齐岗位怎么干活，再决定列表、筛选和角色边界。" },
  { id: "api", icon: Braces, tone: "border-cyan-100 bg-cyan-50 text-cyan-700", title: "后端与 API", text: "提供稳定的数据服务、接口约定与第三方集成。医疗项目里这包括与医院 HIS 对接；教培、官网和小程序也通过同一套接口协同，而不是各做各的数据。" },
  { id: "ops", icon: Settings2, tone: "border-amber-100 bg-amber-50 text-amber-700", title: "持续运营", text: "上线不是终点。我们提供缺陷响应、小需求迭代、环境巡检与发布支持，让系统在业务变化时仍然可控。" },
];

const platforms = [
  { name: "Web", text: "官网、管理后台和需要大屏操作的业务台。", tone: "border-t-blue-600 bg-blue-50/40" },
  { name: "微信小程序", text: "挂号、约课、查询和轻量办理，用户不用先装 App。", tone: "border-t-cyan-400 bg-cyan-50/50" },
  { name: "Android", text: "面向现场或高频使用的原生应用，例如车间和移动办公。", tone: "border-t-violet-600 bg-violet-50/40" },
  { name: "iOS", text: "与 Android 对齐的移动端，覆盖审批、上课和就诊查询。", tone: "border-t-amber-400 bg-amber-50/50" },
  { name: "鸿蒙", text: "在鸿蒙设备上提供同一套业务入口，而不是事后再补一个壳。", tone: "border-t-slate-900 bg-slate-50" },
];

const languages = [
  { name: "PHP", text: "适合内容型站点、营销落地页与中小型业务后台。交付快、生态成熟，便于中小企业先上线再迭代；也适合与常见 CMS 或既有 PHP 资产衔接。", color: "text-blue-700" },
  { name: "Java", text: "适合规则较多、权限复杂、需要长期演进的管理系统与核心业务服务。强调清晰分层、可测试与稳定发布，降低多人协作时的互相踩踏。", color: "text-violet-700" },
  { name: "Python", text: "适合数据处理、自动化脚本、AI 赋能相关服务与中后台接口。当项目需要快速验证模型接入、文档解析或检索能力时，Python 往往是更顺的路径。", color: "text-cyan-700" },
  { name: "Go", text: "适合高并发接口、网关类组件与需要轻量部署的后端服务。强调简单部署与可观测性，便于把关键链路做得干净、好运维。", color: "text-amber-700" },
];

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow="服务"
        title="软件外包服务，按业务阶段拆清交付边界"
        lead="从办公协同、在线课堂、医疗就诊，到生产执行和官网内容，码上云按业务阶段交付可上线的系统。同一套能力可以落到 Web、微信小程序、Android、iOS 和鸿蒙。"
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-20 sm:px-8 md:grid-cols-2">
        {services.map((item) => (
          <article key={item.id} id={item.id} className="rounded-xl border border-slate-200 bg-white p-6">
            <div className={`mb-5 grid size-10 place-items-center rounded-lg border ${item.tone}`}><item.icon className="size-5" /></div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>
      <section id="platforms" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold text-primary">交付终端</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">同一套业务，可以出现在五个端上</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">前端按使用场景选择终端，不把所有能力都塞进一个页面。OA、教培、医疗、MES 和官网 CMS 都可以按需组合下面这些端。</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platforms.map((item) => (
              <article key={item.name} className={`rounded-xl border border-slate-200 border-t-4 p-4 ${item.tone}`}>
                <strong className="block text-sm">{item.name}</strong>
                <span className="mt-2 block text-xs leading-6 text-slate-600">{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold text-primary">技术如何进入交付</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight">多种语言，按问题选型，而不是按口号选型</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">语言本身不是卖点。按业务复杂度、维护成本和上线后的变更方式来定，不把项目绑在某一种技术上。下面是常见做法，不是能力边界。</p>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {languages.map((item) => (
            <div key={item.name} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-8">
              <h3 className={`text-lg font-semibold ${item.color}`}>{item.name}</h3>
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.35),transparent_42%),linear-gradient(135deg,#1e1b4b,#4c1d95_55%,#2563eb)] p-6 text-white sm:p-8">
          <h3 className="text-xl font-semibold">AI 赋能如何进入交付</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/90">我们不会把「上了大模型」当成项目目标。更常见的做法是：先找到重复劳动高、信息检索慢、人工抄写多的环节，再把摘要、分类、检索或辅助填写嵌进现有流程，并保留人工复核。这样 AI 成为业务系统的能力层，而不是独立演示页。</p>
        </div>
      </section>
      <CtaBand title="不确定该从哪一块开始？" text="把现状系统、痛点与预期时间告诉我们，我们会建议更合适的切入范围与技术路径。" />
    </main>
  );
}
