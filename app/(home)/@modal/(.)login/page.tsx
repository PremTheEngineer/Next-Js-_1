"use client";

import LoginForm from "../../../../rjsf/form/LoginForm"
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={() => router.back()}
      />

      {/* Modal box */}
      <div className="relative z-10 w-105 rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-lg font-semibold">Sign in</h2>

        <LoginForm />

        <button
          onClick={() => router.back()}
          className="mt-4 text-sm text-neutral-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default page;
