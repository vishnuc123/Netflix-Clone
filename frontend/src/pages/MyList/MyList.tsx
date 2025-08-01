import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useWatchlist } from '../../context/Watchlist';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';

const MyList = () => {
  const { watchList, removeFromWatchlist } = useWatchlist();
  const [movieDetails, setMovieDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const promises = watchList.map(id =>
          axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY, // 🔐 Use your TMDB API key from .env
            },
          })
        );

        const responses = await Promise.all(promises);
        const movies = responses.map(res => res.data);
        setMovieDetails(movies);
      } catch (error) {
        console.error("Error fetching movie details", error);
      } finally {
        setLoading(false);
      }
    };

    if (watchList.length > 0) {
      fetchMovieDetails();
    } else {
      setMovieDetails([]);
    }
  }, [watchList]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : movieDetails.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-lg text-gray-400">Your watchlist is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movieDetails.map((movie) => (
              <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden relative">
                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className="absolute top-1 right-1 text-white bg-black bg-opacity-50 p-1 rounded-full z-10 cursor-pointer"
                >
                  <IoClose size={20} />
                </button>

                <div className="aspect-[2/3] bg-gray-700 flex items-center justify-center">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    className="h-full w-full object-cover brightness-[.6]"
                    alt={movie.title}
                  />
                </div>

                <div className="p-2">
                  <p className="text-sm font-semibold truncate">{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
