const express = require("express")
const router = express.Router()
const {signup, signin} = require("../controllers/auth.controller.js")

router.post("/signup", signup)
router.post("/signin", signin)

module.exports = router