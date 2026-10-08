import type { RequirementType } from "./api";

export const interestOptions = [
  { value: "unsure", requirementType: "other", label: "先沟通，暂不确定" },
  { value: "oa", requirementType: "web-admin", label: "彩云 OA 系统" },
  { value: "edu", requirementType: "web-admin", label: "彩云在线教培系统" },
  { value: "medical", requirementType: "web-admin", label: "彩云医疗系统" },
  { value: "mes", requirementType: "web-admin", label: "MES 系统" },
  { value: "cms", requirementType: "website-cms", label: "企业官网 CMS 系统" },
  { value: "multi", requirementType: "mobile-app", label: "多端定制（Web / 小程序 / Android / iOS / 鸿蒙）" },
] as const satisfies ReadonlyArray<{ value: string; requirementType: RequirementType; label: string }>;

export type InterestValue = (typeof interestOptions)[number]["value"];
