<h1 align="center"><code>is-internet-present.js</code></h1>

<p align="center">Check connectivity status: Online or Offline?</p>

## ⚙️ Installation

```js
npm i is-internet-present
```

## 📖 Usage

#### ◎ Import

```js
// ES6
import isInternetPresent from "is-internet-present";

// commonjs
const isInternetPresent = require("is-internet-present");
```

#### ◎ Examples

```js
(async () => {
    const online = await isInternetPresent();
    console.log('Online:', online);
})();
```

```js
isInternetPresent().then(online => {
    console.log('Online:', online);
});
```

Change host (where the request gets sent)

```js
(async () => {
    const online = await isInternetPresent('www.google.com');
    console.log('Online:', online);
})();
```

---

[Support me on Patreon](https://www.patreon.com/axorax) - 
[Check out my socials](https://github.com/axorax/socials)