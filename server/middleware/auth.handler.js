const jwt = require("jsonwebtoken");
const { User } = require("../sequelize");

// protected route
// admin route
async function protect(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  /* 
    example of req.headers.authorization

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
    
    */

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);

    req.user = await User.findOne({ where: { id: decoded.user.id } });

    next();
  } catch (err) {
    console.log(err);

    return res.status(401).json({ message: "Unauthorized" });
  }
}

function admin(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

module.exports = {
  protect,
  admin,
};
