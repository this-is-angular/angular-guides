// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const shadesOfPurpleTheme = require("prism-react-renderer/themes/shadesOfPurple");

const organizationName = "this-is-angular";
const projectName = "angular-guides";
const title = "This is Angular guides";

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: `/${projectName}/`,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/blog`,
          showReadingTime: true,
        },
        docs: {
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main`,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  projectName,
  tagline: "Open Learning Angular guides by This is Angular.",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/docusaurus.png",
      footer: {
        copyright: "© This is Learning. Licensed under CC BY-SA 4.0.",
        links: [
          {
            title: "Open Learning",
            items: [
              {
                label: title,
                to: "/",
              },
              {
                label: "NgRx Essentials",
                href: "https://this-is-angular.github.io/ngrx-essentials-course",
              },
              {
                label: "RxJS Fundamentals",
                href: "https://this-is-learning.github.io/rxjs-fundamentals-course",
              },
              {
                label: "This is Learning on DEV Community",
                href: "https://dev.to/this-is-learning",
              },
              {
                label: "This is Angular on DEV Community",
                href: "https://dev.to/this-is-angular",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "This is Learning Community on Discord",
                href: "https://discord.gg/ygKzbrBtVn",
              },
              {
                label: "This is Learning on GitHub",
                href: "https://github.com/this-is-learning",
              },
              {
                label: "This is Angular on GitHub",
                href: "https://github.com/this-is-learning",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Star on GitHub",
                href: `https://github.com/${organizationName}/${projectName}`,
              },
              {
                label: "This is Learning on Twitter",
                href: "https://twitter.com/Thisis_Learning",
              },
              {
                label: "This is Angular on Twitter",
                href: "https://twitter.com/Thisis_Angular",
              },
            ],
          },
        ],
        logo: {
          alt: title,
          href: "https://thisislearning.dev",
          src: "img/logo.png",
        },
        style: "dark",
      },
      navbar: {
        items: [
          {
            docId: "/category/fundamentals",
            label: "Fundamentals",
            position: "left",
            type: "doc",
          },
          {
            docId: "/category/workflow",
            label: "Workflow",
            position: "left",
            type: "doc",
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: "GitHub",
            position: "right",
          },
        ],
        logo: {
          alt: title,
          src: "img/logo.png",
        },
        title,
      },
      prism: {
        darkTheme: shadesOfPurpleTheme,
        defaultLanguage: "typescript",
        theme: shadesOfPurpleTheme,
      },
      url: `https://${organizationName}.github.io`,
    }),
  title,
  // GitHub Pages adds a trailing slash to Docusaurus URLs by default.
  trailingSlash: false,
  url: `https://${organizationName}.github.io`,
};

module.exports = config;
