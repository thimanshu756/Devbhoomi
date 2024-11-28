const { verifyToken } = require("../middlewares/verifyToken");
const {
  postRatingAndReview,
  getRatingsAndReviews,
} = require("../controllers/ratingandreview");

const router = require("express").Router();

router.get("/getRating", getRatingsAndReviews);
router.post("/createRating", verifyToken, postRatingAndReview);

module.exports = router;
