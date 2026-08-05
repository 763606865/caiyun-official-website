import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./brand-logo";

const footerGroups = [
  { title: "开发服务", links: ["Web 应用开发", "移动应用开发", "管理系统开发", "系统运维运营"] },
  { title: "产品与工具", links: ["CMS 内容中台", "低代码表单", "开放 API", "在线工具箱"] },
  { title: "了解彩云", links: ["关于我们", "客户案例", "新闻动态", "加入我们"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <BrandLogo inverted />
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">让成熟的软件工程能力，成为企业数字化业务快速落地的可靠底座。</p>
          <div className="mt-7 grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-3 hover:text-white" href="tel:400-888-2026"><Phone className="size-4 text-cyan-300" />400-888-2026</a>
            <a className="flex items-center gap-3 hover:text-white" href="mailto:business@caiyun.net"><Mail className="size-4 text-violet-300" />business@caiyun.net</a>
            <span className="flex items-center gap-3"><MapPin className="size-4 text-blue-300" />中国 · 专业软件研发与运营团队</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-400">
                {group.links.map((label) => <li key={label}><Link href="/#" className="hover:text-white">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 彩云网络科技有限公司 版权所有</span>
          <div className="flex gap-5"><Link href="/#">隐私政策</Link><Link href="/#">服务条款</Link><Link href="/#">网站地图</Link></div>
        </div>
      </div>
    </footer>
  );
}
