import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

import API from "../api/favoriteApi";

const Favorites = () => {

  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites =
    async () => {

      try {

        const response =
          await API.get("/");

        setFavorites(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  const toggleFavorite =
    async (movie) => {

      try {

        await API.delete(
          `/${movie.movieId}`
        );

        setFavorites((prev) =>
          prev.filter(
            (fav) =>
              fav.movieId !==
              movie.movieId
          )
        );

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <div className="min-h-screen bg-[#141414]">

      <Navbar />

      <div className="px-8 py-6">

        <h1 className="text-white text-3xl font-bold mb-8">
          My Favorites
        </h1>

        {favorites.length === 0 ? (

          <h2 className="text-white text-center text-2xl">
            No favorite movies yet
          </h2>

        ) : (

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

            {favorites.map(
              (movie) => (

                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onFavorite={
                    toggleFavorite
                  }
                  isFavorite={
                    true
                  }
                />

              )
            )}

          </div>

        )}

      </div>

    </div>
  );
};

export default Favorites;