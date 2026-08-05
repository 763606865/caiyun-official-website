import { z } from "zod";
import { requirementTypes } from "./api";

const optionalText = (max: number) => z.string().trim().max(max, `最多填写 ${max} 个字符`);

export const customerRequirementSchema = z.object({
  contact_name: optionalText(100),
  contact_method: z.string().trim().min(1, "请填写联系方式").max(255, "联系方式最多 255 个字符"),
  organization: optionalText(255),
  requirement_type: z.string().refine(
    (value) => requirementTypes.some((type) => type === value),
    "请选择需求类型",
  ),
  requirements: z.string().trim().max(10_000, "项目需求最多 10000 个字符").refine(
    (value) => value.length === 0 || value.length >= 10,
    "项目需求填写后至少需要 10 个字符",
  ),
  privacy_accepted: z.boolean().refine(Boolean, "请阅读并同意隐私政策"),
});

export type CustomerRequirementValues = z.infer<typeof customerRequirementSchema>;
