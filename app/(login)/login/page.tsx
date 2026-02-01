import { TypographyH1 } from "@/components/ui/typographyH1";
import LoginForm from "../../../rjsf/form/LoginForm";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#ff5200]">
      <div className="border-2 rounded-2xl border-neutral-500 p-4 bg-[#ffffff] shadow-2xl">
        <TypographyH1 text="Welcome to the platform" h="2" color="black" />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
