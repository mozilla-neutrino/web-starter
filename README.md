# Web Starter

Create Web apps with zero initial configuration. `web-starter` is built using [Neutrino](https://github.com/mozilla-neutrino/neutrino-dev) to harness the power of Webpack with the simplicity of [presets](https://neutrino.js.org/presets/). 
 
## Features

- Zero upfront configuration necessary to start developing and building a web app
- Extends from [neutrino-preset-web](https://neutrino.js.org/presets/neutrino-preset-web/)
  - Modern Babel compilation supporting ES modules, last 2 major browser versions, and async functions
  - Webpack loaders for importing HTML, CSS, images, icons, and fonts
  - Webpack Dev Server during development
  - Automatic creation of HTML pages, no templating necessary
  - Hot Module Replacement support
  - Production-optimized bundles with Babili minification and easy chunking
  - Easily extensible to customize your project as needed
- Extends from [neutrino-preset-airbnb-base](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/)
  - Zero upfront configuration necessary to start linting your project
  - Modern Babel knowledge supporting ES modules, JSX, Web and Node.js apps
  - Highly visible during development, fails compilation when building for production
  - Easily extensible to customize your project as needed

## Requirements

- Node.js v6.9+
- Yarn or npm client

## Installation

To get you started fork and clone the `web-starter` repository and install the dependencies using Yarn or the npm client.

```bash
❯ cd web-starter/
❯ yarn
```

## Quick start

### Yarn

```bash 
❯ yarn start
✔ Development server running on: http://localhost:5000
✔ Build completed
```

### npm
````bash
❯ npm start
✔ Development server running on: http://localhost:5000
✔ Build completed
````

## Building

`web-starter` builds static assets to the `build` directory by default when running `yarn build`.

```bash
❯ yarn build
clean-webpack-plugin: /web/build has been removed.
Build completed in 1.494s

Hash: ef8ca37e117089178c24
Version: webpack 2.2.1
Time: 1498ms
                                  Asset       Size  Chunks             Chunk Names
   index.5b3435cc1ee2740765f4.bundle.js  197 bytes    0, 1  [emitted]  index
manifest.dbb32c022e4826bcf1ae.bundle.js    1.41 kB       1  [emitted]  manifest
                             index.html  779 bytes          [emitted]
✨  Done in 3.09s.
```

## Running Tests

In order to keep this starter kit minimalist, `web-starter` has no test runner configured, however adding one is incredible easy with Neutrino. Refer to the [relevant section on building and running tests](https://neutrino.js.org/usage.html#building-and-running-tests). 


## Customizing

To override the build configuration, start with the documentation on [customization](https://neutrino.js.org/customization/). `neutrino-preset-web` creates some conventions to make overriding the configuration easier once you are ready to make changes.

By default the Web preset creates a single **main** `index` entry point to your application, and this maps to the `index.js` file in the `src` directory. This means that the Web preset is optimized toward the use case of single-page applications over multi-page applications.

### Simple customization

By following the [customization guide](https://neutrino.js.org/customization/simple.html) and knowing the rule, loader, and plugin IDs above, you can override and augment the build directly from `package.json`.

#### Vendoring

By defining an entry point in package.json named `vendor` you can split out external dependencies into a chunk separate from your application code.

_Example: Put lodash into a separate "vendor" chunk:_

```json
{
  "neutrino": {
    "config": {
      "entry": {
        "vendor": [
          "lodash"
        ]
      }
    }
  },
  "dependencies": {
    "lodash": "*"
  }
}
```

#### HTML files

If you wish to override how HTML files are created for your React app, refer to the [relevant section on neutrino-preset-web](https://neutrino.js.org/presets/neutrino-preset-web/#html-files).

_Example: Change the application mount ID from "root" to "app":_

```json
{
  "neutrino": {
    "options": {
      "html": {
        "appMountId": "app"
      }
    }
  }
}
```

### Advanced configuration

By following the [customization guide](https://neutrino.js.org/customization/advanced.html) and knowing the rule, loader, and plugin IDs from
neutrino-preset-web, you can override and augment the build by creating a JS module which overrides the config.

#### Vendoring

By defining an entry point named `vendor` you can split out external dependencies into a chunk separate
from your application code.

_Example: Put lodash into a separate "vendor" chunk:_

```js
module.exports = neutrino => {
  neutrino.config
    .entry('vendor')
    .add('lodash');
};
```

## Contributing

Thank you for wanting to help out with Neutrino! We are very happy that you want to contribute, and have put together the [contributing guide](https://neutrino.js.org/contributing/#contributing) to help you get started. We want to do our best to help you make successful contributions and be part of our community.