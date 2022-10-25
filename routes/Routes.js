const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController.js");

// Add Users 

router.post("/api/addusers", authController.createUser);

// Get Users 

router.get("/api/getusers", authController.getUsers);

// Login Users 

router.post("/api/loginusers", authController.loginUsers);

module.exports = router;