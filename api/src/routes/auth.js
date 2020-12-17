const server = require("express").Router();
const { User } = require("../db.js");

server.get("/me", async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await User.findByPk(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = server;
