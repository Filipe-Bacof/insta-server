const express = require("express");
const router = express.Router();

// Controller
const { register } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/usersValidations");

// Routes
router.post("/register", userCreateValidation(), validate, register);

module.exports = router;
