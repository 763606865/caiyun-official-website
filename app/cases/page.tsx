import type { Metadata } from "next";
import { CaseVisual, CtaBand, TagList } from "@/components/site/marketing";

export const metadata: Metadata = {
  title: "案例 — 码上云 OA、教培、医疗、MES 与官网 CMS",
  description: "码上云产品案例：彩云 OA 系统、彩云在线教培系统、彩云医疗系统、MES 系统与企业官网 CMS。前端支持 Web、微信小程序、Android、iOS 与鸿蒙。",
};

export default function CasesPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-slate-200 bg-[radial-gradient(ellipse_at_0%_0%,rgba(34,211,238,0.2),transparent_42%),radial-gradient(ellipse_at_100%_0%,rgba(124,58,237,0.14),transparent_40%),linear-gradient(180deg,#eef4ff,#f8fafc)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-sm font-semibold text-primary">产品案例</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">五个正在交付的产品，覆盖办公、教学、医疗与制造</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">下面是码上云手头的项目。只说明系统做什么、落在哪些端，不写未经确认的客户名称和成果数字。</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <article id="oa" className="grid overflow-hidden rounded-xl border border-slate-200 lg:grid-cols-2">
          <CaseVisual tone="blue" label="01 · 办公协同" title="把审批和权限收进同一套系统" featured />
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">彩云 OA 系统</h2>
            <p className="text-sm leading-7 text-slate-600">面向企业内部的办公协同。日常审批、通知和权限不再散落在表格和聊天记录里，员工在 Web 或移动端处理同一套待办。适合人员开始变多、流程开始靠口头传递的团队。</p>
            <TagList tags={["审批协同", "Web", "Android / iOS / 鸿蒙"]} />
          </div>
        </article>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article id="edu" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <CaseVisual tone="cyan" label="02" title="在线教培" />
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold">彩云在线教培系统</h3>
              <p className="text-sm leading-7 text-slate-600">给教培机构一套上课系统，直播课和录播课都在里面。机构排课、学员上课、课后回看走同一条链路，也可以用微信小程序作为学员入口。</p>
              <TagList tags={["直播课", "录播课", "微信小程序"]} />
            </div>
          </article>
          <article id="medical" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <CaseVisual tone="violet" label="03" title="医疗就诊" />
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold">彩云医疗系统</h3>
              <p className="text-sm leading-7 text-slate-600">覆盖医院挂号、诊所就诊和健康体检。新系统和医院已有 HIS 对接，挂号与就诊数据不必再手工抄一遍。患者侧可以用 Web 或微信小程序完成查询和预约。</p>
              <TagList tags={["挂号", "体检", "HIS 对接"]} />
            </div>
          </article>
          <article id="mes" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <CaseVisual tone="amber" label="04" title="制造执行" />
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold">MES 系统</h3>
              <p className="text-sm leading-7 text-slate-600">面向生产现场的制造执行系统。工单、工序和现场进度放在同一条链路上，办公室和车间看到的是同一份进度，而不是两套表格。</p>
              <TagList tags={["工单工序", "Web", "Android"]} />
            </div>
          </article>
          <article id="cms" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <CaseVisual tone="ink" label="05" title="官网内容" />
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold">企业官网 CMS 系统</h3>
              <p className="text-sm leading-7 text-slate-600">企业官网不只是一次做完的页面。CMS 把栏目、内容和发布交给业务人员，市场改文案不必每次都找开发。需要时再接到小程序或独立活动页。</p>
              <TagList tags={["官网", "内容发布", "Web"]} />
            </div>
          </article>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">以上五个都是码上云的产品项目。前端可按场景组合 Web、微信小程序、Android、iOS 和鸿蒙。若某个项目已有可公开的客户资料，可以再替换成具名案例。</p>
      </section>
      <CtaBand title="想基于其中一套继续做，或做一个相近的系统？" text="说明更接近 OA、教培、医疗、MES 还是官网 CMS，以及要落在哪些端上。" />
    </main>
  );
}
