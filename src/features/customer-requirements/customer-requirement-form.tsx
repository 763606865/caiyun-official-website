"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { applyApiFieldErrors, getApiErrorMessage } from "@/lib/forms";
import { isApiError } from "@/lib/http";
import { createCustomerRequirement, type RequirementType } from "./api";
import { customerRequirementSchema, type CustomerRequirementValues } from "./schemas";

const defaultValues: CustomerRequirementValues = {
  contact_name: "",
  contact_method: "",
  organization: "",
  requirement_type: "",
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
    try {
      const result = await createCustomerRequirement({
        contact_name: values.contact_name || undefined,
        contact_method: values.contact_method,
        organization: values.organization || undefined,
        requirement_type: values.requirement_type as RequirementType,
        requirements: values.requirements || undefined,
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
    <div id="trial" className="m-3 rounded-[1.4rem] bg-white p-7 text-slate-900 sm:p-10">
      <h3 className="text-xl font-bold">预约项目咨询</h3>
      <p className="mt-2 text-sm text-slate-500">请留下联系方式和简要需求</p>
      <form onSubmit={onSubmit} className="mt-7 grid gap-5 sm:grid-cols-2" noValidate>
        {formError ? <Alert className="border-rose-200 bg-rose-50 text-rose-700 sm:col-span-2">{formError}</Alert> : null}
        <label className="form-field">
          <span>姓名</span>
          <input autoComplete="name" maxLength={100} placeholder="怎么称呼您" aria-invalid={Boolean(errors.contact_name)} {...register("contact_name")} />
          {errors.contact_name ? <span className="text-xs text-rose-600">{errors.contact_name.message}</span> : null}
        </label>
        <label className="form-field">
          <span>联系方式 *</span>
          <input autoComplete="tel" maxLength={255} placeholder="电话、邮箱或微信" aria-invalid={Boolean(errors.contact_method)} {...register("contact_method")} />
          {errors.contact_method ? <span className="text-xs text-rose-600">{errors.contact_method.message}</span> : null}
        </label>
        <label className="form-field">
          <span>公司名称</span>
          <input autoComplete="organization" maxLength={255} placeholder="所在企业或团队" aria-invalid={Boolean(errors.organization)} {...register("organization")} />
          {errors.organization ? <span className="text-xs text-rose-600">{errors.organization.message}</span> : null}
        </label>
        <label className="form-field">
          <span>需求类型 *</span>
          <select defaultValue="" aria-invalid={Boolean(errors.requirement_type)} {...register("requirement_type")}>
            <option value="" disabled>请选择</option>
            <option value="website-cms">官网 / CMS</option>
            <option value="web-admin">Web / 管理系统</option>
            <option value="mobile-app">移动应用</option>
            <option value="product-trial">产品试用</option>
            <option value="other">其他需求</option>
          </select>
          {errors.requirement_type ? <span className="text-xs text-rose-600">{errors.requirement_type.message}</span> : null}
        </label>
        <label className="form-field sm:col-span-2">
          <span>项目需求</span>
          <textarea rows={4} maxLength={10_000} placeholder="请简要描述业务目标、核心功能或预期上线时间（填写时至少 10 个字符）" aria-invalid={Boolean(errors.requirements)} {...register("requirements")} />
          {errors.requirements ? <span className="text-xs text-rose-600">{errors.requirements.message}</span> : null}
        </label>
        <label className="flex items-start gap-2 text-xs leading-5 text-slate-500 sm:col-span-2">
          <input type="checkbox" className="mt-0.5" aria-invalid={Boolean(errors.privacy_accepted)} {...register("privacy_accepted")} />
          <span>我已阅读并同意隐私政策，授权彩云网络与我联系{errors.privacy_accepted ? <span className="mt-1 block text-rose-600">{errors.privacy_accepted.message}</span> : null}</span>
        </label>
        <Button type="submit" loading={isSubmitting} className="rounded-xl px-6 py-3.5 font-semibold sm:col-span-2">
          提交需求<ArrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </div>
  );
}
