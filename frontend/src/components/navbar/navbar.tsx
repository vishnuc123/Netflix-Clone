import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-6">
          <img
            src="/logo.png"
            alt="Netflix"
            className="h-6 md:h-8 object-contain"
          />

          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              TV Shows
            </a>
            <a href="#" className="hover:text-gray-300">
              Movies
            </a>
            <a href="#" className="hover:text-gray-300">
              New & Popular
            </a>
            <a href="#" className="hover:text-gray-300">
              My List
            </a>
          </nav>
        </div>

        {/* Right: Icons + Avatar */}
        <div className="flex items-center gap-4">
          <FaSearch className="cursor-pointer hover:text-gray-300" />
          <FaBell className="cursor-pointer hover:text-gray-300" />
          <img
            src="/avatar.png"
            alt="Profile"
            className="w-8 h-8 rounded object-cover cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
