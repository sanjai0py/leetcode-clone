const express = require("express")
const router = express.Router()
const {signup} = require("../controllers/auth.controller.js")

// create a user
// router.route("/").get(signup)

router.get("/", signup)

module.exports = router