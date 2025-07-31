import type { User } from "firebase/auth";
import type { ReactNode } from "react"

export type Child ={
    child:ReactNode
}

export type AuthContextType = {
  userDetails: User | null;
  isLogged: boolean;
};