// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Notch Pay Developer",
  tagline: "Notch Pay developer guide",
  url: "https://developer.notchpay.co",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  favicon: "img/favicon.ico",
  organizationName: "notchpay", // Usually your GitHub org/user name.
  projectName: "developer",// Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
      title: "Notch Pay Developer",
      logo: {
        alt: "Notch Pay Developer",
        src: "img/notchpay.jpeg",
      },
      items: [
        /*{
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Guides",
        },*/
        /*{ to: "/snippets", label: "Snippets", position: "left" },
        { to: "/plugins", label: "Plugins", position: "left" },*/
        {
          href: "https://notchpay.co",
          label: "Website",
          position: "right",
        },
        {
          href: "https://github.com/notchpay/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Notch Pay LLC, Inc. Proudly powered by MFOUM GROUP.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
