const mcache = require("memory-cache");
const { CACHE_KEY } = require("../config");

module.exports = function(duration) {
  return (req, res, next) => {
    let url = req.originalUrl || req.url;
    url += url[url.length - 1] != "/" ? "/" : "";
    const key = CACHE_KEY + url;
    const cacheBody = mcache.get(key); 

    if (cacheBody) {
      return res.send(JSON.parse(cacheBody));
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};
