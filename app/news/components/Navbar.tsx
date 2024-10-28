import { useAuth } from "@/utils/AuthContext";
import React from "react";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          Gaming<span className="text-red-500">Hub</span>
        </h1>

        <nav>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
