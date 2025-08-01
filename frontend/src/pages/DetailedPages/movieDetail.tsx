import { useEffect, useState } from 'react';
import { FaPlay, FaPlus, FaThumbsUp } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoPlayer from '../../components/Video/VideoPlayer';
import axios from 'axios';
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const movie = location.state
    const [Loading, setLoading] = useState<boolean>(false)
    const [playVideo, setPlayVideo] = useState<boolean>(false)
    const [videoLink, setVideoLink] = useState<string | null>(null)

    const requestVideo = async () => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
            );

            const videoKey = res.data.results?.[0]?.key;
            if (videoKey) {
                setVideoLink(videoKey);
                navigate('/watch', { state: { link: videoKey } });
            }
        } catch (err) {
            console.error("Error fetching video:", err);
        }
    };

    return (
        <div className="relative w-full h-screen bg-black text-white overflow-hidden">
            {/* Banner image or video */}
            {!playVideo ? (
                <div className="relative h-full w-full">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        className="h-full w-full object-cover brightness-[.6]"
                    />
                    {/* Top-to-bottom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
                </div>
            ) : (
                <VideoPlayer  />
            )}

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full px-10 pb-10">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-xl">{movie.title}</h1>

                {/* Buttons */}
                <div className="flex items-center gap-4 mb-6">
                    <button
                        className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded hover:bg-opacity-80 font-semibold text-lg"
                        onClick={requestVideo}
                    >
                        <FaPlay /> Play
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full border border-white/30">
                        <FaPlus />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full border border-white/30">
                        <FaThumbsUp />
                    </button>
                </div>

                {/* Movie Info */}
                <div className="text-sm space-y-2 max-w-2xl">
                    {movie.release_date && (
                        <div className="text-green-400 font-semibold">
                            {new Date(movie.release_date).getFullYear() >= new Date().getFullYear() - 1 ? 'New' : ''}
                        </div>
                    )}

                    <div className="text-gray-300">
                        {movie.release_date?.split('-')[0]} &bull; {movie.original_language?.toUpperCase()} &bull; {movie.adult ? '18+' : 'PG'}
                    </div>

                    <div className="text-red-500 font-bold">
                        Popularity Score: {Math.round(movie.popularity)}
                    </div>

                    <p className="text-gray-200 line-clamp-4">
                        {movie.overview || 'No description available.'}
                    </p>
                </div>

                {/* Metadata */}
                <div className="text-xs text-gray-400 mt-4 space-y-1">
                    <p><span className="font-semibold">Original Title:</span> {movie.original_title || 'N/A'}</p>
                    <p><span className="font-semibold">Language:</span> {movie.original_language?.toUpperCase()}</p>
                    <p><span className="font-semibold">Rating:</span> {movie.vote_average} ⭐ ({movie.vote_count} votes)</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
