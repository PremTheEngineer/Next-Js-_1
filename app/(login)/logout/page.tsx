"use client";

import { redirect } from "next/navigation";

function Logout() {
  return (
    <div
      onClick={() => {
        localStorage.removeItem("user");
      }}
    >
      Logout
    </div>
  );
}

export default Logout;
