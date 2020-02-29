const { CacheDeleteHelper } = require("../helpers");
let _authService = null;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createUser = await _authService.signUp(body);
    CacheDeleteHelper(req, false, "user", 2);
    return res.status(201).send(createUser);
  }

  async signIn(req, res) {
    const { body } = req;
    const creds = await _authService.signIn(body);
    return res.send(creds);
  }
}

module.exports = AuthController;
