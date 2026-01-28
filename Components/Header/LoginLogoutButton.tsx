"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logout from "@/app/(login)/logout/page";

export default function LoginLogoutButton() {
  const user = localStorage.getItem("user");
  return (
    <Button className="p-6 rounded-xl">
      {user ? <Logout /> : <Link href={"/login"}>Log in</Link>}
    </Button>
  );
}
