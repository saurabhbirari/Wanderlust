const express = require("express");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/reviews.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

//Reviews
//POST review Route
router.post("/", isLoggedIn, validateReview, reviewController.createReview);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  reviewController.destroyReview
);

module.exports = router;
