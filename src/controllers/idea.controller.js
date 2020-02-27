let _ideaservice = null;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaservice = IdeaService;
  }

  async get(req, res) {
    const { ideaId } = req.params;
    const user = await _ideaservice.get(ideaId);
    return res.send(user);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const ideas = await _ideaservice.getAll(pageSize, pageNum);
    return res.send(ideas);
  }

  async create(req, res) {
    const { body } = req;
    const createdIdea = await _ideaservice.create(body);
    return res.status(201).send(createdIdea);
  }

  async update(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const updatedIdea = await _userservice.update(ideaId, body);
    return res.send(updatedIdea);
  }

  async delete(req, res) {
    const { ideaId } = req.params;
    const deletedIdea = await _userservice.delete(ideaId);
    return res.send(deletedIdea);
  }

  async getUserIdeas(req, res) {
    const { userId } = req.params;
    const ideas = await _ideaservice.getUserIdeas(userId);
    return res.send(ideas);
  }

  async upvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaservice.upvoteIdea(ideaId);
    return res.send(idea);
  }

  async downvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaservice.downvoteIdea(ideaId);
    return res.send(idea);
  }
}

module.exports = IdeaController;
