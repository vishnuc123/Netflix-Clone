import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../config/firebase";
import type { AuthContextType, Child } from "../types/Types";

export const authContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }: Child) => {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [isLogged, setIslogged] = useState(false);

  useEffect(() => {
    const stopListening = onAuthStateChanged(auth, (firebaseUser) => {
      setUserDetails(firebaseUser);
      setIslogged(true);
    });

    return () => stopListening();
  }, []);

  return (
    <authContext.Provider value={{ userDetails, isLogged:!!userDetails }}>
      {children}
    </authContext.Provider>
  );
};
