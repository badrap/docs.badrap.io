# The docs.badrap.io site [![build](https://github.com/badrap/docs/workflows/build/badge.svg)](https://github.com/badrap/docs/actions?query=workflow%3Abuild)

This is the repository for authoring and building content for the https://docs.badrap.io site.

Changes to this repository's `main` branch get automatically built and deployed. The site is built using [VuePress](https://vuepress.vuejs.org/), the result is pushed to this repository's `gh-pages` branch from which [GitHub Pages](https://pages.github.com/) deploys it.

## Development Quickstart

If you have Docker and Docker Compose installed, then you can run

```sh
$ docker-compose up
```

After the initial compilation the site will be served on http://localhost:8080/. The repository root directory is mounted inside the dev build container, which should enable live reloads.

You can shut down the development environment by running

```sh
$ docker-compose down -v
```

## Development Slow Start

### Prerequisites

As a prerequisite for running the development environment you need to have [Node.js](https://nodejs.org) installed.

On the first run you need to install the dependencies (VuePress and whatnot) by running the following command in this repository:

```
$ npm install
```

### Start Development

Start the development environment:

```sh
$ npm run dev
```

After a while you can open http://localhost:8080/ to see the current version of the site. The site also auto-updates when you edit the relevant files under `./docs`.

By default the development server binds to `localhost` port `8080`. This can be modified by setting the environment variables `HOST` and `PORT`:

```sh
$ HOST=192.168.0.1 PORT=3000 npm run dev
```

## Building for Production

Changes to the `main` branch are deployed automatically. However, if you want to try building a production version of the site manually, the command is:

```sh
$ npm run build
```

If the build is successful the results are located in the `./docs/.vuepress/dist` directory.
