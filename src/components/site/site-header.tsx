"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";

const navigation = [
  { label: "首页", href: "/" },
  { label: "服务", href: "/services" },
  { label: "案例", href: "/cases" },
  { label: "关于", href: "/about" },
];

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function SiteHeader() {
  const pathname = normalize(usePathname());
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="码上云首页" onClick={() => setOpen(false)}>
          <BrandLogo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {navigation.map((item) => {
            const current = normalize(item.href) === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-[15px] font-medium ${current ? "bg-blue-50 text-primary" : "text-slate-800 hover:bg-slate-50"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="ml-2 rounded-lg border border-slate-200 px-4 py-2 text-[15px] font-semibold text-slate-900 hover:border-blue-200 hover:bg-blue-50">
            预约沟通
          </Link>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? "关闭菜单" : "打开菜单"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav id="nav-mobile" className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden" aria-label="移动导航">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-[15px] font-medium">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
            预约沟通
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
