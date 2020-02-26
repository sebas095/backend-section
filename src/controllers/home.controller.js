let _homeservice = null;

class HomeController {
  constructor({ HomeService }) {
    _homeservice = HomeService;
  }

  index(req, res) {
    return res.send(_homeservice.index());
  }
}

module.exports = HomeController;
