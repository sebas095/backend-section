const { CacheDeleteHelper } = require("../helpers");
let _userservice = null;

class UserController {
  constructor({ UserService }) {
    _userservice = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userservice.get(userId);
    return res.send(user);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const users = await _userservice.getAll(pageSize, pageNum);
    return res.send(users);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updatedUser = await _userservice.update(userId, body);
    //CacheDeleteHelper(req);
    return res.send(updatedUser);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const deletedUser = await _userservice.delete(userId);
    //CacheDeleteHelper(req);
    return res.send(deletedUser);
  }
}

module.exports = UserController;
