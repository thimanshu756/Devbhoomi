const router = require("express").Router();
const { createPost, getAllPosts, getMyPosts, searchPosts, deletePost, addToFavourites, removeFromFavourites, getPostsByDateRange, getFavourites } = require("../controllers/postController");
const {verifyToken} = require("../middlewares/verifyToken");



router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/post/search", searchPosts);
router.put("/post/addToFavourites/:postId",verifyToken, addToFavourites);
router.put("/post/removeFromFavourites/:postId",verifyToken, removeFromFavourites);
router.get("/post/favourites", verifyToken, getFavourites);
router.get("/post/getPostByDateRange", verifyToken, getPostsByDateRange);

module.exports = router;