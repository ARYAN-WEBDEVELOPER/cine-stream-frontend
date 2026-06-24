import {
  useEffect,
  useState,
} from "react";

import Navbar from "../components/Navbar";

import API from "../api/reviewApi";

const Review = () => {

  const [reviews, setReviews] =
    useState([]);

  const [movieTitle, setMovieTitle] =
    useState("");

  const [reviewText, setReviewText] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews =
    async () => {
      try {

        setLoading(true);

        const response =
          await API.get("/");

        setReviews(
          response.data
        );

      } catch (error) {

        setError(
          "Failed to load reviews"
        );

      } finally {

        setLoading(false);

      }
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await API.post("/", {
            movieId:
              Date.now(),

            movieTitle,

            review:
              reviewText,

            rating,
          });

        setReviews((prev) => [
          response.data,
          ...prev,
        ]);

        setMovieTitle("");
        setReviewText("");
        setRating(5);

      } catch (error) {

        setError(
          "Failed to add review"
        );

      }
    };

  const deleteReview =
    async (id) => {

      try {

        await API.delete(
          `/${id}`
        );

        setReviews((prev) =>
          prev.filter(
            (review) =>
              review._id !== id
          )
        );

      } catch (error) {

        setError(
          "Failed to delete review"
        );

      }
    };

  return (
    <div className="min-h-screen bg-[#141414]">

      <Navbar />

      <div className="px-8 py-6">

        <h1 className="text-white text-3xl font-bold mb-6">
          Movie Reviews
        </h1>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form
          onSubmit={
            handleSubmit
          }
          className="bg-zinc-900 p-6 rounded-lg mb-8"
        >

          <input
            type="text"
            placeholder="Movie Name"
            value={movieTitle}
            onChange={(e) =>
              setMovieTitle(
                e.target.value
              )
            }
             className="w-full p-3 rounded mb-4 bg-zinc-800 text-white border border-zinc-700"
            required
          />

          <textarea
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) =>
              setReviewText(
                e.target.value
              )
            }
            className="w-full p-3 rounded mb-4 bg-zinc-800 text-white border border-zinc-700"
            rows="4"
            required
          />

          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) =>
              setRating(
                e.target.value
              )
            }
            className="w-full p-3 rounded mb-4  bg-zinc-800 text-white border border-zinc-700"
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded"
          >
            Add Review
          </button>

        </form>

        {loading ? (
          <h2 className="text-white">
            Loading Reviews...
          </h2>
        ) : (

          <div className="space-y-4">

            {reviews.map(
              (review) => (

                <div
                  key={
                    review._id
                  }
                  className="bg-zinc-900 p-4 rounded"
                >

                  <h2 className="text-white text-xl font-bold">
                    {
                      review.movieTitle
                    }
                  </h2>

                  <p className="text-yellow-400">
                    ⭐ {
                      review.rating
                    } / 5
                  </p>

                  <p className="text-zinc-300 my-2">
                    {
                      review.review
                    }
                  </p>

                  <button
                    onClick={() =>
                      deleteReview(
                        review._id
                      )
                    }
                    className="bg-red-500 px-4 py-2 rounded text-white"
                  >
                    Delete
                  </button>

                </div>
              )
            )}

          </div>

        )}

      </div>

    </div>
  );
};

export default Review;