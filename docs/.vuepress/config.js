import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

module.exports = defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/badrap-logo.png",
    docsRepo: "badrap/docs.badrap.io",
    docsDir: "docs",
    docsBranch: "main",
    contributors: false,
    editLink: true,
    navbar: [
      {
        text: "badrap.io",
        link: "https://badrap.io",
      },
    ],
    locales: {
      "/": {
        selectLanguageName: "English",
        selectLanguageText: "Languages",
        editLinkText: "Edit this page on GitHub",
      },
      "/fi/": {
        selectLanguageName: "Suomi",
        selectLanguageText: "Kielet",
        editLinkText: "Muokkaa tätä sivua GitHubissa",
      },
    }
  }),
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
});
