import type { User } from "firebase/auth";
import type { ReactNode } from "react"

export type Child = {
  children: React.ReactNode
}

export type AuthContextType = {
  userDetails: User | null;
  isLogged: boolean;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path:string;
  overview:string;
  vote_average:number;
};
