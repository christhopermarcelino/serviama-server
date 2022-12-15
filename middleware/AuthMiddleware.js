const authenticationMiddleware = (req, res, next) => {
  return next();
};

module.exports = { authenticationMiddleware };
