"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { siteConfig } from "@/config/site";
import { applyApiFieldErrors, getApiErrorMessage } from "@/lib/forms";
import { isApiError } from "@/lib/http";
import { createCustomerRequirement } from "./api";
import { interestOptions } from "./interests";
import { customerRequirementSchema, type CustomerRequirementValues } from "./schemas";

const defaultValues: CustomerRequirementValues = {
  contact_name: "",
  contact_method: "",
  organization: "",
  interest: "unsure",
  requirements: "",
  privacy_accepted: false,
};

export function CustomerRequirementForm() {
  const { toast } = useToast();
  const [formError, setFormError] = useState<string>();
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting } } = useForm<CustomerRequirementValues>({
    resolver: zodResolver(customerRequirementSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(undefined);
    const interest = interestOptions.find((option) => option.value === values.interest);
    if (!interest) {
      setFormError("请选择感兴趣的方向");
      return;
    }
    const direction = `感兴趣的方向：${interest.label}`;
    const requirements = values.requirements ? `${direction}\n${values.requirements}` : direction;
    try {
      const result = await createCustomerRequirement({
        contact_name: values.contact_name || undefined,
        contact_method: values.contact_method,
        organization: values.organization || undefined,
        requirement_type: interest.requirementType,
        requirements,
      });
      reset(defaultValues);
      toast({ title: "提交成功", description: result.data.message });
    } catch (error) {
      if (applyApiFieldErrors(error, setError)) {
        setFormError("请检查表单中标出的内容");
      } else if (isApiError(error) && error.status === 429) {
        setFormError("提交过于频繁，请稍后再试");
      } else {
        setFormError(getApiErrorMessage(error, "提交失败，请稍后重试"));
      }
    }
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-slate-950">需求表单</h2>
      <form onSubmit={onSubmit} className="mt-6 grid gap-5" noValidate>
        {formError ? <Alert className="border-rose-200 bg-rose-50 text-rose-700">{formError}</Alert> : null}
        <label className="form-field">
          <span>姓名</span>
          <input autoComplete="name" maxLength={100} placeholder="怎么称呼您" aria-invalid={Boolean(errors.contact_name)} {...register("contact_name")} />
          {errors.contact_name ? <span className="text-xs text-rose-600">{errors.contact_name.message}</span> : null}
        </label>
        <label className="form-field">
          <span>电话 *</span>
          <input autoComplete="tel" maxLength={255} placeholder="方便回拨的号码" aria-invalid={Boolean(errors.contact_method)} {...register("contact_method")} />
          {errors.contact_method ? <span className="text-xs text-rose-600">{errors.contact_method.message}</span> : null}
        </label>
        <label className="form-field">
          <span>公司</span>
          <input autoComplete="organization" maxLength={255} placeholder="公司或团队名称" aria-invalid={Boolean(errors.organization)} {...register("organization")} />
          {errors.organization ? <span className="text-xs text-rose-600">{errors.organization.message}</span> : null}
        </label>
        <label className="form-field">
          <span>感兴趣的方向</span>
          <select aria-invalid={Boolean(errors.interest)} {...register("interest")}>
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.interest ? <span className="text-xs text-rose-600">{errors.interest.message}</span> : null}
        </label>
        <label className="form-field">
          <span>需求说明</span>
          <textarea rows={5} maxLength={10_000} placeholder="例如：诊所需要挂号和 HIS 对接；或教培机构要同时做直播课和录播课，学员用微信小程序进入。" aria-invalid={Boolean(errors.requirements)} {...register("requirements")} />
          {errors.requirements ? <span className="text-xs text-rose-600">{errors.requirements.message}</span> : null}
        </label>
        <label className="flex items-start gap-2 text-xs leading-5 text-slate-500">
          <input type="checkbox" className="mt-0.5" aria-invalid={Boolean(errors.privacy_accepted)} {...register("privacy_accepted")} />
          <span>
            我已阅读并同意隐私政策，授权{siteConfig.legalName}与我联系
            {errors.privacy_accepted ? <span className="mt-1 block text-rose-600">{errors.privacy_accepted.message}</span> : null}
          </span>
        </label>
        <Button type="submit" loading={isSubmitting} className="w-full rounded-lg py-3 font-semibold">
          提交需求
        </Button>
      </form>
    </div>
  );
}
