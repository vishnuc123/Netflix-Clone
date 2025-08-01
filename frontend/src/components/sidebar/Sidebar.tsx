import { FaSearch, FaHome, FaFilm, FaTv, FaChartLine, FaPlus, FaRandom } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 bg-black text-white flex flex-col items-center py-6 space-y-15">
      {/* Icons */}
      <FaSearch className="text-xl hover:text-red-500 transition" />

      <div className="relative">
        <FaHome className="text-xl text-white" />
        {/* Red underline for active */}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-600 rounded-full" />
      </div>

      <FaFilm className="text-2xl hover:text-red-500 transition" />
      <FaTv className="text-2xl hover:text-red-500 transition" />
      <FaChartLine className="text-2xl hover:text-red-500 transition" />
      <FaPlus className="text-2xl hover:text-red-500 transition" />
      <FaRandom className="text-2xl hover:text-red-500 transition" />
    </div>
  );
};

export default Sidebar;
