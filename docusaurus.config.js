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
  organizationName: "ger86", // Usually your GitHub org/user name.
  projectName: "pichuflines-on-the-road", // Usually your repo name.

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
          alt: "Pichuflines",
          src: "img/logo.jpg",
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
                label: "[2019-03-16] Casa rural informates",
                to: "/viajes/2019/casa-rural-informates",
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
              {
                label: "[2021-06-04] Pobla de Farnals",
                to: "/viajes/2021/pobla-farnals",
              },
              {
                label: "[2021-06-30] Menorca",
                to: "/viajes/2021/menorca",
              },
              {
                label: "[2021-07-16] Cambrils",
                to: "/viajes/2021/cambrils",
              },
              {
                label: "[2021-08-14] Suances",
                to: "/viajes/2021/suances",
              },
              {
                label: "[2021-09-03] Boda de Aida y Toni",
                to: "/viajes/2021/boda-aida-toni",
              },
              {
                label: "[2021-09-10] Boda de Josu y Ari",
                to: "/viajes/2021/boda-josu-ari",
              },
              {
                label: "[2021-11-26] Casa rural ballet",
                to: "/viajes/2021/casa-rural-ballet",
              },
            ],
          },
          {
            title: "2022-🚀",
            items: [
              {
                label: "[2022-02-17] Lanzarote",
                to: "/viajes/2022/lanzarote",
              },
              {
                label: "[2022-03-12] Cumple Josu",
                to: "/viajes/2022/cumple-josu",
              },
              {
                label: "[2022-04-01] Cumple Raquel",
                to: "/viajes/2022/cumple-raquel",
              },
              {
                label: "[2022-06-11] Boda Irene y Juan",
                to: "/viajes/2022/boda-irene-juan",
              },
            ],
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
