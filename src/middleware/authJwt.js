const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    console.log(err)
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};
const isAdmin = async(req, res, next) => {
  const user = await prisma.user.findUnique({
    where:{
      id:req.userId
    }
  })
  console.log(user)
  if (user.role === "ADMIN") return next()
  return res.status(403).json({error: "U cant do that"})
}
const authJwt = {
  verifyToken: verifyToken,
  isAdmin
};
module.exports = authJwt;