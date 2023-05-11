const CustomError = require("../../utils/error/CustomError");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const asyncErrorWrapper = require("express-async-handler");
const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../utils/auth/tokenHelpers");

const getAccesToRoute = asyncErrorWrapper(async (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    return next(
      new CustomError("You are not authorized to access this route ", 401)
    );
  }
  const accessToken = getAccessTokenFromHeader(req);
  const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(
      new CustomError("You are not authorized to access this route ", 401)
    );
  }
  req.user = user;
  next();
});

module.exports = { getAccessToRoute };
