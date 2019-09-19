# marcobiedermann.com

[![CircleCI](https://circleci.com/gh/marcobiedermann/marcobiedermann-v2.svg?style=svg)](https://circleci.com/gh/marcobiedermann/marcobiedermann-v2)
[![Maintainability](https://api.codeclimate.com/v1/badges/c35056c6037f4463ade5/maintainability)](https://codeclimate.com/github/marcobiedermann/marcobiedermann-v2/maintainability)
[![codecov](https://codecov.io/gh/marcobiedermann/marcobiedermann-v2/branch/master/graph/badge.svg)](https://codecov.io/gh/marcobiedermann/marcobiedermann-v2)
![David](https://img.shields.io/david/marcobiedermann/marcobiedermann-v2.svg)
![David](https://img.shields.io/david/dev/marcobiedermann/marcobiedermann-v2.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f7c49d4-d60b-403e-8890-9045200f3bc8/deploy-status)](https://app.netlify.com/sites/marcobiedermann-v2/deploys)
[![Known Vulnerabilities](https://snyk.io/test/github/marcobiedermann/marcobiedermann-v2/badge.svg)](https://snyk.io/test/github/marcobiedermann/marcobiedermann-v2)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcobiedermann%2Fmarcobiedermann-v2.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcobiedermann%2Fmarcobiedermann-v2?ref=badge_shield)

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Requirements

- [Node.js](https://nodejs.org/)

## Installation

- Install `node_modules` via `npm install`

## Usage

### Development

Run [webpack-dev-server](https://github.com/webpack/webpack-dev-server) using hot-reloading.

```sh
npm run develop
```

### Formatting

Format code using [Prettier](https://prettier.io/).
Staged files get automatically formatted using git pre-commit hook.

```sh
npm run format
```

### Testing

#### Linting

Lint CSS and JavaScript

```sh
npm run lint
```

##### Linting CSS

Lint CSS using [Stylelint](https://stylelint.io/).

```sh
npm run lint:css
```

##### Linting JavaScript

Lint JavaScript using [ESLint](https://eslint.org/).

```sh
npm run lint:js
```

#### Unit tests

Test code using [Jest](https://jestjs.io/).

```sh
npm test
```

### Production

Build source code to run in production.

```sh
npm run build
npm start
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcobiedermann%2Fmarcobiedermann-v2.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcobiedermann%2Fmarcobiedermann-v2?ref=badge_large)