import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-red-600 text-2xl sm:text-3xl font-bold tracking-wide"
          >
            CineStream
          </Link>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">

            <Link
              to="/favorites"
              className="
                px-4 py-2
                text-sm sm:text-base
                text-white
                rounded-full
                border border-zinc-700
                hover:bg-red-600
                hover:border-red-600
                transition-all duration-300
              "
            >
              Favorites
            </Link>

            <Link
              to="/reviews"
              className="
                px-4 py-2
                text-sm sm:text-base
                text-white
                rounded-full
                border border-zinc-700
                hover:bg-red-600
                hover:border-red-600
                transition-all duration-300
              "
            >
              Reviews
            </Link>

            <Link
              to="/profile"
              className="
                px-4 py-2
                text-sm sm:text-base
                text-white
                rounded-full
                border border-zinc-700
                hover:bg-red-600
                hover:border-red-600
                transition-all duration-300
              "
            >
              Profile
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;