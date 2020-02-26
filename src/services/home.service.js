const BaseService = require("./comment.service");

class HomeService extends BaseService {
  index() {
    return {
      message: "Hello World!"
    };
  }
}

module.exports = HomeService;
