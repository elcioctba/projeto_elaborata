const express = require("express");
const createUser = require("../useCases/users/createUser");
const getAllUsers = require("../useCases/users/getAllUsers");
const loginUser = require("../useCases/users/loginUser");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/user", createUser);

router.post("/user/login", loginUser);

router.get("/user", verifyToken, getAllUsers);

module.exports = router;
