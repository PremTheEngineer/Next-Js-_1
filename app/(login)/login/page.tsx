import LoginForm from "../../../rjsf/form/LoginForm";
import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#ff5200]">
      <div className="border-2 rounded-2xl border-neutral-500 p-4 bg-[#ffffff] shadow-2xl">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
