function logger(req, res, next) {
  console.log("request");
  next();
}

module.exports = logger;
