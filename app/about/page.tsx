import type { Metadata } from "next";
import { CompanyProfile } from "@/components/company/company-profile";

export const metadata: Metadata = {
  title: "公司简介 — 江西码上云信息技术有限公司",
  description: "15年创业与软件开发积累，以江西南昌为主要基地，提供企业软件定制、系统集成与私有化部署服务。",
};

export default function AboutPage() {
  return <CompanyProfile />;
}
