"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { LOGIN } from "@/lib/constants";
import { useAuth } from "@/providers/authProvider";

export default function LoginLogoutButton() {
  const { user, logout } = useAuth();

  return (
    <div className="py-2 px-3 rounded-xl border-2 text-white bg-black border-neutral-900">
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link href={LOGIN()}>Log in</Link>
      )}
    </div>
  );
}
