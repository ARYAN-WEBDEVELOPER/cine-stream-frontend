import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      <Link
        to="/"
        className="text-red-600 text-3xl font-bold"
      >
        CineStream
      </Link>

      <div className="flex gap-4">

        <Link
          to="/favorites"
          className="
            text-white
            border
            border-zinc-600
            px-4
            py-2
            rounded-lg
            hover:bg-zinc-800
            transition
          "
        >
          Favorites
        </Link>

        <Link
          to="/reviews"
          className="
            text-white
            border
            border-zinc-600
            px-4
            py-2
            rounded-lg
            hover:bg-zinc-800
            transition
          "
        >
          Reviews
        </Link>
        
        <Link
          to="/profile"
          className="
            text-white
            border
            border-zinc-600
            px-4
            py-2
            rounded-lg
            hover:bg-zinc-800
            transition
          "
        >
          Profile
        </Link>
        
        

      </div>

    </nav>
  );
};

export default Navbar;