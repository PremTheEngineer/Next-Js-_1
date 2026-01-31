"use client";

import React, { FormEvent, useCallback, useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { LoginSchema, LoginUiSchema } from "../schemas/loginSchema";
import { RegistryWidgetsType, RJSFSchema, WidgetProps } from "@rjsf/utils";
import { IChangeEvent } from "@rjsf/core";
import { handleLogin } from "@/lib/handleLogin";
import { useRouter } from "next/navigation";
import { HOME } from "@/lib/constants";
import { toast } from "sonner";

interface LoginFormData {
  newUserCheck?: boolean;
  username?: string;
  password?: string;
  email?: string;
  age?: number;
  gender?: string;
}

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>();

  const CustomTextWidget = useCallback((props: WidgetProps) => {
    const { id, value, onChange, required } = props;
    return (
      <input
        id={id}
        value={value ?? ""}
        required={required}
        className="p-2 border border-neutral-400 rounded-xl w-full"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }, []);
  const CustomPasswordWidget = useCallback((props: WidgetProps) => {
    const { id, value, onChange, required } = props;
    return (
      <input
        type="password"
        id={id}
        value={value ?? ""}
        required={required}
        className="p-2 border border-neutral-400 rounded-xl w-full"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }, []);
  const CustomEmailWidget = useCallback((props: WidgetProps) => {
    const { id, value, onChange, required } = props;
    return (
      <input
        type="email"
        id={id}
        value={value ?? ""}
        required={required}
        className="p-2 border border-neutral-400 rounded-xl w-full"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }, []);
  const CustomAgeWidget = useCallback((props: WidgetProps) => {
    const { id, value, onChange, required } = props;
    return (
      <input
        type="number"
        min={0}
        id={id}
        value={value ?? ""}
        required={required}
        className="p-2 border border-neutral-400 rounded-xl w-full"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }, []);
  const CustomCheckboxWidget = useCallback((props: WidgetProps) => {
    const { id, value, onChange, required } = props;
    return (
      <>
        <label htmlFor={id}>New user? </label>
        <input
          type="checkbox"
          id={id}
          checked={!!value}
          required={required}
          className="p-2 m-2"
          onChange={(e) => onChange(e.target.checked)}
        />
      </>
    );
  }, []);
  const errorListTemplate = () => {
    return null;
  };

  const widgets: RegistryWidgetsType = {
    TextWidget: CustomTextWidget,
    PasswordWidget: CustomPasswordWidget,
    EmailWidget: CustomEmailWidget,
    UpDownWidget: CustomAgeWidget,
    CheckboxWidget: CustomCheckboxWidget,
  };

  const handleChange = useCallback(
    (data: IChangeEvent<any, RJSFSchema, any>, id?: string | undefined) => {
      setFormData(data.formData);
    },
    [],
  );

  const handleSubmit = useCallback(
    (data: IChangeEvent<any, RJSFSchema, any>, event: FormEvent<any>) => {
      const status = handleLogin(data.formData);
      if (status?.success) {
        toast.success(status?.message);
      } else {
        toast.error(status?.message);
      }
      // console.log("Submitting login form:", data);
      // router.refresh();
      router.back();
    },
    [],
  );

  const handleError = useCallback((errors: any) => {
    console.error("Validation errors:", errors);
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <Form
        schema={LoginSchema}
        uiSchema={LoginUiSchema}
        validator={validator}
        widgets={widgets}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onError={handleError}
      />
    </div>
  );
}

export default LoginForm;
