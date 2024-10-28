'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

// Create a context for authentication
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the onAuthStateChanged listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user when authenticated
      setLoading(false); // Set loading to false once auth state is resolved
    });

    return unsubscribe; // Clean up the listener on unmount
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null); // Clear user state after logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);

