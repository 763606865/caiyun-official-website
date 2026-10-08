import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/marketing";
import { CustomerRequirementForm } from "@/features/customer-requirements";

export const metadata: Metadata = {
  title: "联系 — 预约码上云软件外包沟通",
  description: "预约码上云沟通。可说明需要彩云 OA、在线教培、医疗、MES 或企业官网 CMS，以及 Web、微信小程序、Android、iOS、鸿蒙中的哪些端。",
};

const points = [
  "业务目标与当前痛点：要上线什么、卡在哪里",
  "现状资产：是否已有官网、后台或需要对接的系统",
  "时间预期：希望何时看到可演示版本",
  "方向与终端：OA、教培、医疗、MES、官网 CMS，以及 Web、小程序、Android、iOS、鸿蒙",
];

export default function ContactPage() {
  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow="联系"
        title="预约沟通，留下你的项目需求"
        lead="说明更接近哪条产品线，以及要做 Web、微信小程序、Android、iOS 还是鸿蒙。提交后，我们会在工作日尽快与你联系。"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside>
          <h2 className="text-2xl font-semibold">我们通常会确认这些事</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">不必准备完整技术方案。说清楚业务背景，就足够开启第一轮沟通。</p>
          <ul className="mt-6 grid gap-4">
            {points.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                <Check className="mt-1 size-4 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
        <CustomerRequirementForm />
      </section>
    </main>
  );
}
