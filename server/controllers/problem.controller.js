const { Problem } = require("../sequelize");

async function newProblem(req, res) {
  const { title, description, difficulty, related_topics } = req.body;
  try {
    
    const problem = new Problem({
      title,
      description,
      difficulty,
      related_topics,
      userId: req.user.id,
    });

    await problem.save();
    res.status(200).json({ message: "Problem created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function getAllProblems(req, res) {
  Problem.findAll({
    order: [["createdAt", "DESC"]],
  })
    .then((problems) => res.status(200).json({ data: problems }))
    .catch((err) => res.status(500).json({ message: err.message }));
}

module.exports = {
  newProblem,
  getAllProblems,
};
