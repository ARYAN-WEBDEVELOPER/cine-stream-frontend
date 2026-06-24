import { useEffect, useState } from "react";

import {
  fetchPopularMovies,
  searchMovies,
} from "../api/tmdb";

import API from "../api/favoriteApi";


import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";


import useDebounce from "../hooks/useDebounce";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [favorites, setFavorites] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

 

  const [favoriteLoading, setFavoriteLoading] =
  useState(false);

  const [error, setError] =
  useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] =
    useState(true);

  const debouncedSearchTerm =
    useDebounce(searchTerm, 500);

  // =========================
  // Load Favorites
  // =========================

  useEffect(() => {
  fetchFavorites();
}, []);

const fetchFavorites = async () => {
  try {
    setError("");

    const response =
      await API.get("/");

    setFavorites(response.data);
  } catch (error) {
    console.log(error);

    setError(
      "Failed to load favorites"
    );
  }
};

  // =========================
  // Fetch Popular Movies
  // =========================

  const getPopularMovies = async (
    pageNumber = 1
  ) => {
    try {
      setLoading(true);

      const data =
        await fetchPopularMovies(
          pageNumber
        );

      if (pageNumber === 1) {
        setMovies(data);
      } else {
        setMovies((prev) => [
          ...prev,
          ...data,
        ]);
      }

      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Search Movies
  // =========================

  const handleSearch = async (
    pageNumber = 1
  ) => {
    try {
      setLoading(true);

      if (
        debouncedSearchTerm.trim() === ""
      ) {
        await getPopularMovies(
          pageNumber
        );

        return;
      }

      const data = await searchMovies(
        debouncedSearchTerm,
        pageNumber
      );

      if (pageNumber === 1) {
        setMovies(data);
      } else {
        setMovies((prev) => [
          ...prev,
          ...data,
        ]);
      }

      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

 

  // =========================
  // Reset Pagination on Search
  // =========================

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [debouncedSearchTerm]);

  // =========================
  // Fetch Data
  // =========================

  useEffect(() => {
    if (
      debouncedSearchTerm.trim() === ""
    ) {
      getPopularMovies(page);
    } else {
      handleSearch(page);
    }
  }, [page, debouncedSearchTerm]);

  // =========================
  // Infinite Scroll
  // =========================

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const lastElementRef =
    useInfiniteScroll(
      loadMore,
      loading
    );

  // =========================
  // Favorites
  // =========================

 const toggleFavorite = async (
  movie
) => {
  try {
    setFavoriteLoading(true);
    setError("");

    const exists = favorites.find(
      (fav) =>
        fav.movieId === movie.id
    );

    if (exists) {
      await API.delete(
        `/${movie.id}`
      );

      setFavorites((prev) =>
        prev.filter(
          (fav) =>
            fav.movieId !== movie.id
        )
      );
    } else {
      const response =
        await API.post("/", {
          movieId: movie.id,
          title: movie.title,
          posterPath:
            movie.poster_path,
          releaseDate:
            movie.release_date,
          rating:
            movie.vote_average,
        });

      setFavorites((prev) => [
        ...prev,
        response.data,
      ]);
    }
  } catch (error) {
    console.log(error);

    setError(
      "Failed to update favorites"
    );
  } finally {
    setFavoriteLoading(false);
  }
};

  // =========================
  // UI
  // =========================

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />

      <div className="px-8 py-6">
        <h1 className="text-white text-3xl font-bold mb-6">
          Discover Movies
        </h1>

        {/* Normal Search */}

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

       

        {/* AI Loading */}

        

        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        {/* Favorite Loading */}

        {favoriteLoading && (
          <h2 className="text-green-400 mb-4">
            Updating Favorites...
          </h2>
        )}

        {/* No Movies */}

        {movies.length === 0 &&
        !loading ? (
          <h2 className="text-white text-center text-2xl">
            No movies found
          </h2>
        ) : (
          <>
            {/* Movie Grid */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-6
              "
            >
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onFavorite={
                    toggleFavorite
                  }
                 isFavorite={favorites.some(
                    (fav) =>
                      fav.movieId === movie.id
                     )}
                />
              ))}
            </div>

            {/* Infinite Scroll Trigger */}

            <div
              ref={lastElementRef}
              className="h-10"
            />

            {/* Loader */}

            {loading && (
              <h2 className="text-white text-center py-6">
                Loading more movies...
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;