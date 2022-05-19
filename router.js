const express = require("express");

appRouter = express.Router();

appRouter.post("/send", async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = appRouter;
