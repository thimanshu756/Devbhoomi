/*📌 yeah hai aam jindagi : */
// const express = require("express");

const { login, signup } = require("../controllers/authController");

// const router = express.Router();
// const app = express();

/*Yeah hai mentos jeendagi  */
const router = require("express").Router();
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;