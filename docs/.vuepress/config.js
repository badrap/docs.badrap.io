module.exports = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 8080,
  title: "Badrap docs",
  locales: {
    "/": {
      lang: "en-US",
      description: "Badrap documentation site",
    },
    "/fi/": {
      lang: "fi",
      description: "Badrapin dokumentaatiosivusto",
    },
  },
  themeConfig: {
    logo: "/badrap-logo.png",
    sidebar: "auto",
    docsRepo: "badrap/docs.badrap.io",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    nav: [
      {
        text: "badrap.io",
        link: "https://badrap.io",
      },
    ],
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
      },
      "/fi/": {
        selectText: "Kielet",
        label: "Suomi",
        editLinkText: "Muokkaa tätä sivua GitHubissa",
      },
    },
  },
};
