module.exports = {
  formatQueryStrings(uri, queryObject) {
    // Querystring example : { "components": components }
    // console.log(queryObject);

    const allKeys = Object.keys(queryObject);
    const allValues = Object.values(queryObject);

    var formattedQuerystring = "";

    allValues.forEach((item, index) => {
      if (item !== null) {
        const startingChar = index === 0 ? "?" : "&";
        const formattedItem = typeof item === "array" ? item.join(",") : item;
        formattedQuerystring += `${startingChar}${allKeys[index]}=${formattedItem}`;
      }
    });

    const urlToReturn = `${uri}${formattedQuerystring}`;

    return urlToReturn;
  },

  parseAuthenticationHeaders(headers, tokens) {
    var newObject = {};

    if (tokens.access_token)
      newObject = { Authorization: `Bearer ${tokens.access_token}` };

    return { ...headers, ...newObject };
  },
};
