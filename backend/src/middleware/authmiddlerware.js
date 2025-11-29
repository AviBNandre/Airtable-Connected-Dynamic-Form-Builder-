const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Unauthorized");

  const data = jwt.verify(token, process.env.JWT_SECRET);
  req.airtableToken = data.accessToken;
  next();
};
