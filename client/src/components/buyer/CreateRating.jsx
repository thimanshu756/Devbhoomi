import React, { useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const CreateRating = () => {
  const [rating, setRating] = useState(0); // Store the rating value
  const [review, setReview] = useState(""); // Store the review text
  const [isSubmitting, setIsSubmitting] = useState(false); // Track the submission status
  const [message, setMessage] = useState(""); // Success or error message

  // Handle the change in rating
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle the change in review text
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  // Submit the rating and review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === "") {
      setMessage("Please provide a rating and review.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/createRating`,
        {
          rating,
          review,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );

      if (response.data.success) {
        setMessage("Rating and review submitted successfully!");
        setRating(0);
        setReview("");
      } else {
        setMessage("Failed to submit the rating and review.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while submitting the review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Rate and Review
      </h2>

      {message && (
        <div
          className={`mb-4 text-center ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Rating Input */}
        <div className="mb-4 text-center">
          <ReactStars
            count={5}
            value={rating}
            onChange={handleRatingChange}
            size={24}
            activeColor="#ffd700"
            classNames="cursor-pointer"
          />
        </div>

        {/* Review Textarea */}
        <div className="mb-4">
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Write your review here..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-yellow-500 text-white rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRating;
