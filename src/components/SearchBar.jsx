const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="
          w-full
          bg-zinc-900
          text-white
          px-5
          py-4
          rounded-xl
          outline-none
          border
          border-zinc-700
          focus:border-red-500
        "
      />
    </div>
  );
};

export default SearchBar;