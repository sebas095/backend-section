const { Router } = require("express");
const { ParseIntMiddleware, CacheMiddleware } = require("../middlewares");
const { CACHE_TIME } = require("../helpers");

module.exports = function({ IdeaController }) {
  const router = Router();

  router.get(
    "/",
    [ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    IdeaController.getAll
  );
  router.get("/:ideaId", IdeaController.get);
  router.get("/:userId/all", IdeaController.getUserIdeas);
  router.post("/", IdeaController.create);
  router.patch("/:ideaId", IdeaController.update);
  router.delete("/:ideaId", IdeaController.delete);
  router.post("/:ideaId/upvote", IdeaController.upvoteIdea);
  router.post("/:ideaId/downvote", IdeaController.downvoteIdea);

  return router;
};
