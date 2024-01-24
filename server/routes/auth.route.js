const express = require("express")
const auth = express.Router()
const {signup, signin} = require("../controllers/auth.controller.js")

auth.post("/signup", signup)
auth.post("/signin", signin)

module.exports = auth