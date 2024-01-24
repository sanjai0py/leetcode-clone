const express = require("express")
const problem = express.Router()
const { newProblem, getAllProblems, deleteProblem } = require("../controllers/problem.controller.js")
const { protect } = require("../middleware/auth.handler.js")

// problem creation route
problem.route("/new").post(protect, newProblem)

// problem deletion route
// problem.route("/delete").delete(protect, deleteProblem)

// problem list route
problem.route("/all").get(getAllProblems)


module.exports = problem