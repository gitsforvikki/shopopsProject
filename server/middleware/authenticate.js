const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  //get token from header
  const token = request.header("x-auth-token");
  if (!token) {
    return response
      .status(401)
      .json({ msg: "No token , authentication denied..." });
  }
  try {
    let decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    request.user = decode.user;
    next();
  } catch (err) {
    console.log(err);
    return response.status(404).json({ msg: "Token Invalid" });
  }
};

module.exports = authenticate;
