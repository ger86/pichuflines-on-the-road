// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pichuflines",
  tagline: "On the road",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.jpg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "viajes",
          routeBasePath: "viajes",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pichuflines",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Viajes",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "2017-2019",
            items: [
              {
                label: "[2017-12-02] Sepúlveda",
                to: "/viajes/2017/sepulveda",
              },
              {
                label: "[2018-03-17] Arenas de San Pedro",
                to: "/viajes/2018/arenas-de-san-pedro",
              },
              {
                label: "[2018-04-20] Multiaventura",
                to: "/viajes/2018/multiaventura",
              },
              {
                label: "[2018-07-21] Marruecos",
                to: "/viajes/2018/marruecos",
              },
              {
                label: "[2018-12-09] Chinchón",
                to: "/viajes/2018/chinchon",
              },
              {
                label: "[2019-04-26] Tenerife",
                to: "/viajes/2019/tenerife",
              },
              {
                label: "[2019-07-27] Llanes",
                to: "/viajes/2019/llanes",
              },
              {
                label: "[2019-07-30] Cerdeña",
                to: "/viajes/2019/cerdena",
              },
              {
                label: "[2019-10-12] Zaragoza",
                to: "/viajes/2019/zaragoza",
              },
              {
                label: "[2019-12-12] Galicia",
                to: "/viajes/2019/galicia",
              },
            ],
          },
          {
            title: "2020-2021",
            items: [
              {
                label: "[2020-02-27] Valencia",
                to: "/viajes/2020/valencia",
              },
              {
                label: "[2020-03-27] Vietnam",
                to: "/viajes/2020/vietnam",
              },
              {
                label: "[2020-07-13] Cambrils",
                to: "/viajes/2020/cambrils",
              },
              {
                label: "[2020-08-22] Canet de mar",
                to: "/viajes/2020/canet",
              },
              {
                label: "[2020-09-17] Almería",
                to: "/viajes/2020/almeria",
              },
            ],
          },
          {
            title: "2022-🚀",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pichuflines "On the road", Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
