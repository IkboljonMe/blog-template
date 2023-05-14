const express = require("express");
const { register, login, getPrivateData } = require("../controllers/auth");
const getAccessToRoute = require("../middlewares/authorization/auth");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/private", getAccessToRoute, getPrivateData);

module.exports = router;
