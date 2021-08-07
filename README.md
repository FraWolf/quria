# Quria

A simple Destiny 2 API Wrapper made with Node.js.
<br />

### Installation

**Node.js 14.0.0 or newer is required.**

```sh-session
npm install quria
```

or

```sh-session
yarn add quria
```

### Example usage

```js
const QuriaAPI = require("quria");
const quria = new QuriaAPI({
  API_KEY: "your-api-key-here",
});

quria.destiny2
  .GetDestinyManifest()
  .then((res) => {
    console.log(res.data.Response);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
```

### Documentation

You can use the [Bungie API Docs](bungie-net.github.io/multi/) as **Quria Documentation** because all of it's methods are the same as the docs says.

### Links

- [Bungie API Docs](https://bungie-net.github.io/multi/)
- [GitHub](https://github.com/FraWolf/quria/)
- [NPM](https://www.npmjs.com/package/quria)

### Projects that uses Quria

Currently no projects uses Quria because it's still in development phase. If you would to include your project here, open an issues with the name, repository/website and a small description.

### To do:

- [ ] OAuth2 Integration
- [ ] Better request function (to avoid api url repeating every time)
- [ ] Finishing authentication required function
- [ ] Typescript rewrite (maybe using DIM's api types)

### Contributing

If you would contribute to this project, just fork the repository and then send a pull request. We will validate your request and, if it's valid, we will commit into the main branch.
