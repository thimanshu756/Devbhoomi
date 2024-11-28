import React from "react";

const ReviewCard = ({ review }) => {
  console.log("review in ReviewCard ->", review);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="flex items-center mb-4">
        {/* Display user's initials or avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-500">
          {review.user.username.toUpperCase()[0]} {/* Display first letter of username */}
        </div>
        <div className="ml-4">
          {/* Display the username */}
          <h3 className="text-lg font-semibold">{review.user.username}</h3>
          <div className="flex items-center text-yellow-500">
            {/* Display stars for rating */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${index < review.rating ? 'fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.27l-5.18 3.73 1.64-6.91L1 7.24l6.91-.57L10 0l2.09 6.67 6.91.57-4.46 4.85 1.64 6.91z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
      {/* Display the review */}
      <p className="text-gray-700">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
