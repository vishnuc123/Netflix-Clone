import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-black text-white">
      {/* Background image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="Netflix Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-10"
        />
        <div>
          <button className="text-white font-semibold px-4 py-2 bg-red-600 rounded">
            Sign In
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-xl mb-6">Watch anywhere. Cancel anytime.</p>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 w-full md:w-2/3 rounded text-black"
          />
          <button className="px-6 py-2 bg-red-600 font-semibold text-lg rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
