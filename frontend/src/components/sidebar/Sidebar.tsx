import { FaSearch, FaHome, FaFilm, FaTv, FaChartLine, FaPlus, FaRandom } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 h-screen w-16 hover:w-40 z-99 duration-300 hover:border-1 hover:border-red-600 hover:rounded-xl bg-black text-white flex flex-col items-center py-6 space-y-15">
      {/* Icons */}
      <FaSearch className="text-xl hover:text-red-500 transition" />

      <div className="relative">
        <FaHome className="text-xl text-white" />
        {/* Red underline for active */}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-600 rounded-full" />
      </div>

      <div className="relative group">
        <FaFilm className="text-2xl hover:text-red-500 transition cursor-pointer" />
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Movies
        </span>
      </div>

      <div className="relative group">
        <FaTv className="text-2xl hover:text-red-500 transition cursor-pointer" />
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          TV Shows
        </span>
      </div>

      <div className="relative group">
        <FaChartLine className="text-2xl hover:text-red-500 transition cursor-pointer" />
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Trending
        </span>
      </div>

      <div className="relative group" onClick={() => navigate('/myList')}>
        <FaPlus className="text-2xl hover:text-red-500 transition cursor-pointer" />
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          My List
        </span>
      </div>

      <div className="relative group">
        <FaRandom className="text-2xl hover:text-red-500 transition cursor-pointer" />
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Shuffle
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
