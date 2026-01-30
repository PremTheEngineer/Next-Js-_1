"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Logout from "@/app/(login)/logout/page";
import { LOGIN } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function LoginLogoutButton() {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);
  return (
    <Button className="p-6 rounded-xl">
      {user ? <Logout /> : <Link href={LOGIN()}>Log in</Link>}
    </Button>
  );
}
