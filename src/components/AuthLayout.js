import React from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

const AuthLayout = ({ children }) => {
  const { logout } = useAuth();

  return (
    <>
      <header className="px-5 py-3 h-16 bg-red-800 flex justify-between items-center shadow-sm">
        <h2 className="text-white text-lg font-semibold tracking-wider">
          <Link href="/dashboard">Dashboard</Link>
        </h2>
        <div className="flex items-center space-x-4 text-white font-medium">
          <Link href={"/profile"} className="hover:text-sky-200">
            Profile
          </Link>
          <button onClick={logout} className="hover:text-sky-200">
            Logout
          </button>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
