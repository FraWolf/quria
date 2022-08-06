<p align="center">
    <img  alt="Quria" src="https://cdn.discordapp.com/attachments/1005391416047960134/1005395699887783986/quriats.min.png">
</p>

<h1 align="center">Quria</h1>
<p align="center">A user-friendly Destiny 2 API Wrapper written with TypeScript and approved by <s>Axis Minds</s> <b>Oryx</b>.</p>
<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT"/>
    </a>
    <a href="https://www.npmjs.com/package/quria">
        <img alt="npm" src="https://img.shields.io/npm/v/quria" />
    </a>
</p>

<p>Quria is a TypeScript library which main purpose is to make it easier to interact with Destiny (1 & 2) API provided by Bungie, obtaining the required information through ready-to-use methods and full support for official types and enums.</p>

<h2>Installation</h2>

<p>To use this library, <b>Node.js 14.17.0</b> or newer are required.</p>

```sh
npm install quria

yarn add quria
```

<h2>Examples</h2>

<details>
  <summary>Basic usage</summary>

```js
const QuriaAPI = require("quria");
const quria = new QuriaAPI({
  API_KEY: "your-api-key-here",
});

quria.destiny2
  .GetDestinyManifest()
  .then((res) => {
    console.log(res.Response);
  })
  .catch((error) => {
    console.error(error);
  });
```

</details>

<h2>Documentation</h2>

You can use the [Bungie API Docs](https://bungie-net.github.io/multi/) as **Quria Documentation** because all of it's methods are the same as the docs says.

<h2>Links</h2>

- [Bungie API Docs](https://bungie-net.github.io/multi/)
- [GitHub](https://github.com/FraWolf/quria/)
- [NPM](https://www.npmjs.com/package/quria)

<h2>Projects that uses Quria</h2>

Currently no projects uses Quria because it's still in development phase. If you would to include your project here, open an issues with the name, repository/website and a small description.

<h2>Contributing</h2>

If you would contribute to this project, just fork the repository and then send a pull request. We will validate your request and, if it's valid, we will commit into the main branch.
