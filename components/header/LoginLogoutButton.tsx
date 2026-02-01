"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { LOGIN } from "@/lib/constants";
import { useAuth } from "@/providers/authProvider";

export default function LoginLogoutButton() {
  const { user, logout } = useAuth();

  return (
    <Button className="p-6 rounded-xl">
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link href={LOGIN()}>Log in</Link>
      )}
    </Button>
  );
}
