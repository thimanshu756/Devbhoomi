// const User = require("../models/User"); // CommonJS import
const Post = require("../models/Post");
const User = require("../models/User");
const RatingAndReview = require("../models/Review"); // CommonJS import
const mongoose = require("mongoose"); // CommonJS import

 const postRatingAndReview = async (req, res) => {
   try {
    // console.log("hii");
    
     const { rating, review } = req.body;
    //  console.log("rating ", rating, "review", review);
     
    const userId = req.id;
    // console.log("userId", userId);
    
    // Validate that the rating is between 1 and 5
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
    }

    // Check if the user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Create a new rating and review
    const newRatingAndReview = new RatingAndReview({
      rating,
      review,
      user: userId,
    });

    // Save the new rating and review to the database
  const newRating=  await newRatingAndReview.save();
    console.log("newRating ->", newRating);
    
    res.status(201).json({
      success: true,
      message: "Rating and review submitted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit rating and review. Please try again.",
    });
  }
};

// Get all ratings and reviews for a user or product (extend as needed)
 const getRatingsAndReviews = async (req, res) => {
  try {
    // If you want to filter by a specific product, you can use req.query.productId
    const { userId } = req.query; // Assume we're fetching ratings for a specific user or product

    // Fetch ratings and reviews by userId (or productId if needed)
  const ratingsAndReviews = await RatingAndReview.find()
    .populate("user", "username") // Optionally, populate user info (like username)
    .exec();

    console.log("ratingsAndReviews ->", ratingsAndReviews);

    if (ratingsAndReviews.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No ratings and reviews found.",
      });
    }

    // Return the list of ratings and reviews
    res.status(200).json({
      success: true,
      data: ratingsAndReviews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch ratings and reviews. Please try again.",
    });
  }
};


module.exports = {
  postRatingAndReview,
  getRatingsAndReviews
};