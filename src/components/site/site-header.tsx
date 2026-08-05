"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";

const navigation = [
  { label: "首页", href: "/" },
  { label: "开发服务", href: "/#services", expandable: true },
  { label: "产品中心", href: "/#products", expandable: true },
  { label: "在线工具", href: "/#tools" },
  { label: "客户案例", href: "/#cases" },
  { label: "关于彩云", href: "/#about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-5 text-xs sm:px-8">
          <span className="text-slate-400">企业级软件开发与数字化运营服务商</span>
          <a href="tel:400-888-2026" className="hidden items-center gap-1.5 text-slate-200 hover:text-white sm:flex">
            <Phone className="size-3" /> 400-888-2026
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-slate-900"><BrandLogo /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="group flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-primary">
              {item.label}
              {item.expandable ? <ChevronDown className="size-3.5 transition group-hover:translate-y-0.5" /> : null}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#contact" className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-blue-50">预约咨询</Link>
          <Link href="/#trial" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-primary-hover">申请试用</Link>
        </div>
        <button type="button" className="grid size-10 place-items-center rounded-full bg-slate-100 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "关闭导航" : "打开导航"}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="移动端导航">
            {navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-primary">{item.label}</Link>)}
            <Link href="/#contact" onClick={() => setOpen(false)} className="mt-3 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white">预约项目咨询</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
