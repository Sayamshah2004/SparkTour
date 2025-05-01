// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // ✅ Load login state from localStorage when app starts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const signIn = () => setIsSignedIn(true);

  const signOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
