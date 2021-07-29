module.exports = {
  formatComponents(uri, components) {
    return `${uri}${
      components.length > 0 ? `?components=${components.join(",")}` : ""
    }`;
  },
};
