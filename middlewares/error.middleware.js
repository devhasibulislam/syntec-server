// error handler function
function errorHandler(err, req, res, next) {
  res.status(500).send({
    acknowledgement: false,
    message: err.name,
    description: err.message,
  });
}

module.exports = errorHandler;
