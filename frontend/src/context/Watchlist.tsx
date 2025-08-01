import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Auth";
import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

interface Movie {
  id: string;
  title: string;
  poster_path: string;

}

interface WatchlistContextType {
  watchList: string[];
  addToWatchlist: (movieId: string) => void;
  removeFromWatchlist: (movieId: string) => void;
}

const WatchListContext = createContext<WatchlistContextType | null>(null);

export const WatchListProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const [watchList, setWatchList] = useState<string[]>([]);

  useEffect(() => {
    if (!auth?.userDetails?.uid) return;

    const unsub = onSnapshot(doc(db, "Users", auth.userDetails.uid), (docSnap) => {
      const data = docSnap.data();
      setWatchList(data?.watchlist || []);
    });

    return () => unsub();
  }, [auth?.userDetails?.uid]);

  const addToWatchlist = async (movieId: string) => {
    if (!auth?.userDetails?.uid) return;
    const userDocRef = doc(db, "Users", auth.userDetails.uid);
    await updateDoc(userDocRef, {
      watchlist: arrayUnion(movieId),
    });
  };

  const removeFromWatchlist = async (movieId: string) => {
    if (!auth?.userDetails?.uid) return;
    const userDocRef = doc(db, "Users", auth.userDetails.uid);
    await updateDoc(userDocRef, {
      watchlist: arrayRemove(movieId),
    });
  };

  return (
    <WatchListContext.Provider value={{ watchList, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchListContext.Provider>
  );
};


export const useWatchlist = () => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("useWatchlist must be used within WatchListProvider");
  }
  return context;
};
