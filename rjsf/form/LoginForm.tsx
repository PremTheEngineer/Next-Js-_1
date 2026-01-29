"use client";

import React, { FormEvent, useCallback, useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { LoginSchema, LoginUiSchema } from "../schemas/loginSchema";
import { RegistryWidgetsType, RJSFSchema, WidgetProps } from "@rjsf/utils";
import { IChangeEvent } from "@rjsf/core";
import { handleLogin } from "@/lib/handleLogin";

interface LoginFormData {
  newUserCheck?: boolean;
  username?: string;
  password?: string;
  email?: string;
  age?: number;
  gender?: string;
}

function LoginForm() {
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
  const CustomPasswordWidget = (props: WidgetProps) => {
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
  };
  const CustomEmailWidget = (props: WidgetProps) => {
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
  };
  const CustomAgeWidget = (props: WidgetProps) => {
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
  };
  const errorListTemplate = () => {
    return null;
  };

  const widgets: RegistryWidgetsType = {
    TextWidget: CustomTextWidget,
    PasswordWidget: CustomPasswordWidget,
    EmailWidget: CustomEmailWidget,
    UpDownWidget: CustomAgeWidget,
  };

  const handleChange = (
    data: IChangeEvent<any, RJSFSchema, any>,
    id?: string | undefined,
  ) => {
    setFormData(data.formData);
  };


  const handleSubmit = (
    data: IChangeEvent<any, RJSFSchema, any>,
    event: FormEvent<any>,
  ) => {
    handleLogin(data.formData);
    console.log("Submitting login form:", data);
    alert(data);
  };

  const handleError = (errors: any) => {
    console.error("Validation errors:", errors);
  };


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
