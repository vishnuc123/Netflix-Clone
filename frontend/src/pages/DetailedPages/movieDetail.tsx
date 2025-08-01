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
    console.log(videoLink)

    const requestVideo = async () => {
    try {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
        );

        const videoKey = res.data.results?.[0]?.key;
        if (videoKey) {
            setVideoLink(videoKey); 
            navigate('/watch', { state: { link: videoKey } });
        } else {
            console.log("No video key found.");
        }
    } catch (err) {
        console.error("Error fetching video:", err);
    }
};

    return (
        <div className="relative w-full h-screen mx-auto bg-black text-white overflow-hidden shadow-xl">
            {/* Banner image */}
            {!playVideo ? (<div className="relative h-96 w-full">
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="House of Ninjas"
                    className="h-full w-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>) : (<><VideoPlayer link={videoLink} /></>)}


            {/* Content */}
            <div className="absolute bottom-0 p-6 w-full">
                <h1 className="text-3xl font-bold mb-2">HOUSE OF NINJAS</h1>

                {/* Buttons */}
                <div className="flex items-center gap-3 mb-4">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-gray-200"
                        onClick={requestVideo}>
                        <FaPlay /> Play
                    </button>
                    <button className="bg-gray-700 bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full">
                        <FaPlus />
                    </button>
                    <button className="bg-gray-700 bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full">
                        <FaThumbsUp />
                    </button>
                </div>

                {/* Info */}
                <div className="text-sm space-y-1">
                    <div className="text-green-400 font-semibold">New</div>
                    <div className="text-gray-300">3 Seasons &bull; 2024 &bull; TV-MA</div>
                    <div className="text-red-500 font-bold">#2 in TV Shows Today</div>
                    <p className="text-gray-200">
                        Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.
                    </p>
                </div>

                {/* Metadata */}
                <div className="text-xs text-gray-400 mt-3">
                    <p><span className="font-semibold">Cast:</span> Kento Kaku, Yosuke Eguchi, Tae Kimura</p>
                    <p><span className="font-semibold">Genres:</span> TV Dramas, Japanese, TV Thrillers</p>
                    <p><span className="font-semibold">This show is:</span> Dark, Suspenseful, Exciting</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
