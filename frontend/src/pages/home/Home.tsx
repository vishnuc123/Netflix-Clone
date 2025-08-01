import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import SwiperCarousel from "../../components/carousel/Carousel";
import { now_playing_URL, popular_URL, top_Rated_URL, Upcoming_URL } from "../../api/Api";
import type { Movie } from "../../types/Types";




const Home = () => {
  const Auth = useAuth();
  const navigate = useNavigate();
  const [Latestmovies, setLatestMovies] = useState<any[]>([])
  const [popular, setPopular] = useState<any[]>([])
  const [top_rated, setTop_rated] = useState<any[]>([])
  const [Upcoming, setUpcoming] = useState<any[]>([])

  const [featured, setFeatured] = useState<Movie | null>(null)

  useEffect(() => {
    if (!Auth?.isLogged) {
      navigate("/login");
    }
  }, [Auth?.isLogged])

  useEffect(() => {
    async function fetchMovies() {
      try {
        // const res = await axios.get(
        //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
        // )
        // setLatestMovies(res.data.results);
        const [now_playing_data, popular_data, top_Rated_data, Upcoming_data] = await Promise.all([
          axios.get(now_playing_URL),
          axios.get(popular_URL),
          axios.get(top_Rated_URL),
          axios.get(Upcoming_URL)
        ])
        const res1 = now_playing_data.data.results
        const res2 = popular_data.data.results
        const res3 = top_Rated_data.data.results
        const res4 = Upcoming_data.data.results

        setLatestMovies(res1)
        setPopular(res2)
        setTop_rated(res3)
        setUpcoming(res4)
        setFeatured(res1[0])

        let index = 0;
        const interval = setInterval(() => {
          setFeatured(res1[index]);
          index = (index + 1) % res1.length;
        }, 2000);

        return () => interval

      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);




  return (
    <div className="relative w-full min-h-screen bg-black text-white">



      {featured && (
        <div
          className="relative h-[70vh] bg-cover bg-center flex items-end p-8"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featured.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
          <div className="w-20 h-screen">

            <Sidebar />
          </div>
          <div className="relative z-10 max-w-xl">
            <h1 className="text-5xl font-bold mb-4">{featured.title}</h1>
            <p className="text-gray-300 mb-4 line-clamp-3">{featured.overview}</p>
            <p className="text-lg text-yellow-400 mb-4">
              {featured.vote_average.toFixed(1)} / 10
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded font-semibold">
                ▶ Play
              </button>
              <button className="bg-gray-600 px-6 py-2 rounded text-white font-semibold">
                Watch Trailer
              </button>

            </div>

          </div>

        </div>

      )}


      {/* Movie Sections */}

      <div className="w-full bg-black  p-12">
        <div className="px-4">
          <h2 className="text-2xl font-bold text-white mb-2">New this week</h2>
          <SwiperCarousel movies={Latestmovies} />
        </div>

        <div className="px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Trending Now</h2>
          <SwiperCarousel movies={popular} />
        </div>

        <div className="px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Top Picks</h2>
          <SwiperCarousel movies={top_rated} />
        </div>
        <div className="px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Upcoming</h2>
          <SwiperCarousel movies={Upcoming} />
        </div>
      </div>


    </div>
  );
};

export default Home;
