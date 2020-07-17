const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const TweetController = require("./controllers/TweetController");
const TweetStream = require("./controllers/TweetStream");

const routes = express.Router();

routes.post("/tweets", TweetController.create);
routes.get("/tweets", TweetController.index);
routes.get("/tweets/status", TweetController.getTweets);
routes.delete(
  "/tweets/:index",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      index: Joi.number().required(),
    }),
  }),
  TweetController.delete
);

module.exports = routes;
