const server = require("express").Router();
const { User } = require("../db.js");

server.get("/", async (req, res, next) => {
  try {
    if (req.user?.isAdmin) {
      const result = await User.findAll();
      res.json(result);
    } else {
      res.sendStatus(401);;
    }
  } catch (error) {
    next(error);
  }
});
server.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByPk(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
server.post("/", async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});
server.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.update(req.body, { where: id, returning: true });
    res.status(202).json(result);
  } catch (error) {
    next(error);
  }
});
server.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: id });
    res.sendStatus(202);
  } catch (error) {
    next(error);
  }
});

module.exports = server;
