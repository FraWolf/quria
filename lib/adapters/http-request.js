const axios = require("axios");

module.exports = {
  request: function (path, method = "GET", headers, body) {
    try {
      const webRequest = axios({
        method: method,
        url: path,
        data: body,
        headers: headers,
      });
      return webRequest;
    } catch (e) {
      return e.response;
    }
  },
};
