const mcache = require("memory-cache");
const { CACHE_KEY } = require("../config");

// Work when there not pagination
module.exports = function(req, flag = true, replace = "", index = 1) {
  let url = req.originalUrl || req.url;
  if (flag) {
    url =
      url.length > 1
        ? url
            .split("/")
            .slice(0, -index)
            .join("/")
        : "/";
  }

  if (replace.length > 0) {
    url =
      url.length > 1
        ? url
            .split("/")
            .slice(0, -index)
            .join("/")
        : "/";

    url += replace;
  }

  const key = CACHE_KEY + url;
  mcache.del(key);
};
