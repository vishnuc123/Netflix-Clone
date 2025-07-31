import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../config/firebase";
import type { AuthContextType, Child } from "../types/Types";

export const authContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({child} :Child) => {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [isLogged, setIslogged] = useState(false);

  useEffect(() => {
    const stopListening = onAuthStateChanged(auth, (firebaseUser) => {
      setUserDetails(firebaseUser);
      setIslogged(!!firebaseUser);
    });

    return () => stopListening();
  }, []);

  return (
    <authContext.Provider value={{ userDetails, isLogged }}>
      {child}
    </authContext.Provider>
  );
};
