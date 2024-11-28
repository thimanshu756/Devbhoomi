// ReviewSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewSlider from "./ReviewSlider";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // State to hold the reviews
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch the reviews from the backend when the component mounts
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/getRating`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
        setReviews(response.data.data); // Assuming the response contains the reviews in `data.data`
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reviews");
        setLoading(false);
        console.error(err);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <div>Loading reviews...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Customer Reviews</h2>
        <ReviewSlider reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewSection;
