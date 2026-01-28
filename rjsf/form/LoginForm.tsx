"use client";

import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { LoginSchema, LoginUiSchema } from "../schemas/loginSchema";
import { RegistryWidgetsType, WidgetProps } from "@rjsf/utils";
import { handleLogin } from "@/lib/handleLogin";


function LoginForm() {
  const CustomTextWidget = (props: WidgetProps) => {
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
  };
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

  const [formData, setFormData] = useState({});

  const handleChange = ({ formData }: { formData: any }) => {
    setFormData(formData);
  };

  const handleSubmit = ({ formData }: { formData: any }) => {
    handleLogin(formData);
    console.log("Submitting login form:", formData);
    alert(formData);
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
