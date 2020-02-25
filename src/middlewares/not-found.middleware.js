module.exports = (req, res, next) =>
  res.status(404).send({ status: 404, messsage: "Resource not found" });
