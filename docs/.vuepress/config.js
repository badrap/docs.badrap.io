module.exports = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 8080,

  title: "Badrap docs",
  head: [
    ["meta", { "http-equiv": "Permissions-Policy", content: "interest-cohort=()" }]
  ],
  locales: {
    "/": {
      lang: "en-US",
      description: "Badrap documentation site"
    },
    "/fi/": {
      lang: "fi",
      description: "Badrapin dokumentaatiosivusto"
    }
  },
  themeConfig: {
    logo: "/badrap-logo.png",
    sidebar: "auto",
    docsRepo: "badrap/docs.badrap.io",
    docsDir: "docs",
    editLinks: true,
    nav: [
      {
        text: "badrap.io",
        link: "https://badrap.io"
      }
    ],
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub"
      },
      "/fi/": {
        selectText: "Kielet",
        label: "Suomi",
        editLinkText: "Muokkaa tätä sivua GitHubissa"
      }
    }
  },

  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: process.env.GA_TRACKING_ID
      }
    ]
  ]
};
