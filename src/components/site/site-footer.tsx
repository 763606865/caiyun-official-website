import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "./brand-logo";

const navigation = [
  { label: "服务", href: "/services" },
  { label: "案例", href: "/cases" },
  { label: "关于", href: "/about" },
  { label: "联系", href: "/contact" },
];

const business = [
  { label: "企业 Web 应用", href: "/services#web" },
  { label: "管理系统", href: "/services#admin" },
  { label: "后端与 API", href: "/services#api" },
  { label: "预约沟通", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="码上云首页">
            <BrandLogo inverted />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            软件外包与多端交付：Web、微信小程序、Android、iOS、鸿蒙。产品覆盖 OA、教培、医疗、MES 与官网 CMS。
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">导航</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-white">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">业务</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {business.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-white">{item.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-8">
          <span>© {siteConfig.legalName}</span>
          <span>{siteConfig.domain}</span>
        </div>
      </div>
    </footer>
  );
}
