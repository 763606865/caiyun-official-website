"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Server, Database, Users, Workflow, GraduationCap, HeartPulse, Bot, Factory, Boxes, Check, MapPin, ClipboardCheck, PencilRuler, Rocket, Wrench } from "lucide-react";
import styles from "./company-profile.module.css";

const cases = [
  { name: "OA 办公", icon: Workflow, title: "审批协作，一条流程看清楚", steps: ["提交申请", "负责人审批", "财务复核", "完成归档"] },
  { name: "ERP 管理", icon: Boxes, title: "订单、采购、库存，业务连起来", steps: ["客户订单", "采购入库", "库存管理", "经营报表"] },
  { name: "MES 生产", icon: Factory, title: "从工单到现场，生产进度看得见", steps: ["生产工单", "工序执行", "现场报工", "进度看板"] },
  { name: "VMS 系统", icon: Building2, title: "围绕实际需求，定制业务系统", steps: ["需求梳理", "业务建模", "功能开发", "系统交付"] },
  { name: "在线培训", icon: GraduationCap, title: "从课程到考核，培训有章可循", steps: ["课程发布", "在线学习", "考试考核", "学习档案"] },
  { name: "线上医疗", icon: HeartPulse, title: "让线上服务与诊疗流程衔接", steps: ["预约服务", "排班管理", "业务协同", "随访服务"] },
  { name: "AI Agent", icon: Bot, title: "让智能助手进入实际工作", steps: ["接收任务", "知识检索", "工具协作", "人工确认"] },
];
const locations = ["北京", "上海", "武汉", "南京", "重庆", "昆明", "贵州", "长沙", "厦门", "深圳"];
const labels = ["公司简介", "合作优势", "项目案例", "独立部署", "交付流程", "服务网络"];

export function CompanyProfile() {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(0);
  useEffect(() => {
    document.documentElement.classList.add("company-profile-active");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.panel));
      });
    }, { rootMargin: "-73px 0px 0px", threshold: 0.5 });
    document.querySelectorAll("[data-panel]").forEach((panel, index) => {
      (panel as HTMLElement).dataset.panel = String(index);
      observer.observe(panel);
    });
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("company-profile-active");
    };
  }, []);
  const item = cases[selected];
  return <main id="main" className={styles.profile} aria-label="公司简介">
    <section id="intro" data-panel className={styles.panel}>
      <div className={styles.inner}>
        <p className={styles.kicker}>江西码上云信息技术有限公司 · 江西南昌</p>
        <div className={styles.hero}>
          <div><h1>15年软件开发积累<br />做值得<span>长期托付</span><br />的技术伙伴</h1><p className={styles.lead}>软件定制 · 系统集成 · AI 应用研发</p><Link href="/contact" className={styles.cta}>聊聊您的项目 <ArrowRight /></Link></div>
          <div className={styles.heroVisual}><span className={styles.small}>专注软件开发服务</span><strong>15<span>年</span></strong><p>创业积累 · 持续服务</p><div className={styles.pills}><span>成熟项目经验</span><span>支持独立部署</span><span>多地服务网点</span></div></div>
        </div>
      </div>
    </section>
    <section id="strength" data-panel className={`${styles.panel} ${styles.light}`}>
      <div className={styles.inner}><p className={styles.kicker}>01 / 为什么选择码上云</p><h2>选软件伙伴，先看这三件事</h2><div className={styles.three}>
        {[{ icon: ClipboardCheck, title: "有案例", text: "七类项目方向", detail: "方案看得见" }, { icon: ShieldCheck, title: "能独立部署", text: "系统部署在客户环境", detail: "数据管理更自主" }, { icon: Wrench, title: "能长期服务", text: "从开发到上线维护", detail: "业务变化有人跟进" }].map(({ icon: Icon, title, text, detail }) => <article key={title} className={styles.card}><Icon className={styles.bigIcon} strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p><span>{detail}</span></article>)}
      </div><p className={styles.note}>用项目实践、交付过程与持续服务，建立合作信任。</p></div>
    </section>
    <section id="projects" data-panel className={styles.panel}>
      <div className={styles.inner}><p className={styles.kicker}>02 / 项目案例</p><h2>您熟悉的业务，我们有项目积累</h2><div className={styles.tabs} role="group" aria-label="选择项目方向">{cases.map(({ name, icon: Icon }, index) => <button key={name} aria-pressed={selected === index} className={selected === index ? styles.selected : ""} onClick={() => setSelected(index)}><Icon size={24} />{name}</button>)}</div>
        <div className={styles.caseVisual} key={item.name}><div className={styles.caseHeading}><item.icon size={40} /><h3>{item.title}</h3></div><div className={styles.flow}>{item.steps.map((step, index) => <div key={step} className={styles.flowStep}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < 3 && <ArrowRight className={styles.connector} />}</div>)}</div><p className={styles.caption}>业务流程示意，非真实客户系统截图；具体功能按项目需求确定。</p></div>
      </div>
    </section>
    <section id="deployment" data-panel className={`${styles.panel} ${styles.dark}`}>
      <div className={styles.inner}><p className={styles.kicker}>03 / 私有化部署</p><h2>系统放在您的环境，数据管理更自主</h2><div className={styles.deployment}><div className={styles.people}><Users size={68} strokeWidth={1.2} /><h3>您的团队</h3><span>按权限访问</span></div><ArrowRight className={styles.accessArrow} size={46} /><div className={styles.boundary}><p><ShieldCheck /> 客户指定的服务器 / 云环境</p><div className={styles.systems}><div><Server size={50} /><strong>业务系统</strong></div><div><Database size={50} /><strong>企业数据</strong></div></div><div className={styles.security}><span><Check />角色权限</span><span><Check />数据备份</span><span><Check />运维支持</span></div></div></div><p className={styles.note}>部署方式、备份策略与维护范围，按项目需求约定。</p></div>
    </section>
    <section id="delivery" data-panel className={styles.panel}>
      <div className={styles.inner}><p className={styles.kicker}>04 / 合作流程</p><h2>四个阶段，每一步都有明确成果</h2><div className={styles.four}>{[{ icon: Users, name: "需求梳理", result: "确认业务与范围" }, { icon: PencilRuler, name: "原型确认", result: "先看界面与流程" }, { icon: Rocket, name: "分阶段交付", result: "按节点演示验收" }, { icon: Wrench, name: "上线维护", result: "持续支持与迭代" }].map(({ icon: Icon, name, result }, index) => <article className={styles.deliveryStep} key={name}><span className={styles.stepLabel}>0{index + 1}</span><Icon size={64} strokeWidth={1.3} /><h3>{name}</h3><p>{result}</p>{index < 3 && <ArrowRight className={styles.connector} />}</article>)}</div><p className={styles.note}>先把需求说清，再把系统做好。</p></div>
    </section>
    <section id="network" data-panel className={`${styles.panel} ${styles.light}`}>
      <div className={styles.inner}><p className={styles.kicker}>05 / 服务网络</p><h2>立足南昌，服务多地客户</h2><div className={styles.network}><div className={styles.base}><MapPin size={62} strokeWidth={1.3} /><strong>江西 · 南昌</strong><span>主要业务基地</span></div><div className={styles.cities}>{locations.map(city => <span key={city}><MapPin size={20} />{city}</span>)}</div></div><div className={styles.closing}><p>把您的业务想法，交给我们一起落地。</p><Link href="/contact" className={styles.cta}>预约项目沟通 <ArrowRight /></Link></div></div>
    </section>
    <nav className={styles.dots} aria-label="专题页板块">{labels.map((label, index) => <a key={label} href={`#${["intro", "strength", "projects", "deployment", "delivery", "network"][index]}`} onClick={(event) => {
      event.preventDefault();
      const panel = document.getElementById(["intro", "strength", "projects", "deployment", "delivery", "network"][index]);
      panel?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }} aria-label={label} aria-current={active === index ? "step" : undefined}><span /> <em>{label}</em></a>)}</nav>
  </main>;
}
