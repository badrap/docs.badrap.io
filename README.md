# The docs.badrap.io site

This is the repository for authoring and building content for the https://docs.badrap.io site.

Changes to this repository's `master` branch get automatically built and deployed. The site is built using [VuePress](https://vuepress.vuejs.org/), the result is pushed to this repository's `gh-pages` branch from which [GitHub Pages](https://pages.github.com/) deploys it.

## Prerequisites

As a prerequisite for running the development environment you need to have [Node.js](https://nodejs.org) and [yarn](https://yarnpkg.com) installed.

On the first run you need to install the dependencies (VuePress and whatnot) by running the following command in this repository:

```
$ yarn
```

## Start Development

Start the development environment:

```sh
$ yarn dev
```

After a while you can open http://localhost:8080/ to see the current version of the site. The site also auto-updates when you edit the relevant files under `./docs`.

## Build the Production Version

Changes to the `master` branch are deployed automatically. However, if you want to try building a production version of the site manually, the command is:

```sh
$ yarn build
```

If the build is successful the results are located in the `docs/.vuepress/dist` directory.
