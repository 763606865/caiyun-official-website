import { z } from "zod";
import { apiClient } from "@/lib/http";

export const requirementTypes = [
  "website-cms",
  "web-admin",
  "mobile-app",
  "product-trial",
  "other",
] as const;

export type RequirementType = (typeof requirementTypes)[number];

export interface CreateCustomerRequirementInput {
  contact_name?: string;
  contact_method: string;
  organization?: string;
  requirement_type: RequirementType;
  requirements?: string;
}

const createCustomerRequirementResponseSchema = z.object({
  id: z.number(),
  message: z.string(),
});

export function createCustomerRequirement(input: CreateCustomerRequirementInput) {
  return apiClient.post<{ id: number; message: string }>(
    "/api/customer-requirements",
    { ...input },
    { responseSchema: createCustomerRequirementResponseSchema },
  );
}
