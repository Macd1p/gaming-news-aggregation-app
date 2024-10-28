"use client";

import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      router.push("/news");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Log In</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 rounded bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        
        <button
          onClick={handleSignIn}
          className="w-full py-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded"
        >
          Sign In
        </button>

        <p className="text-center text-slate-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-slate-300 hover:text-white">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

