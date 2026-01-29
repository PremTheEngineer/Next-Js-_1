"use client";

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
