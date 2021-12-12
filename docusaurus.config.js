// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Notch Pay Developer",
  tagline: "Notch Pay developer guide",
  url: "https://docs.notchpay.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  favicon: "img/favicon.ico",
  organizationName: "notchpay", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Notch Pay Developer",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Guides",
        },
        { to: "/snippets", label: "Snippets", position: "left" },
        { to: "/plugins", label: "Plugins", position: "left" },
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
    cards: [
      {
        title: "Learn",
        image: "img/learn.svg",
        link: "learn/about-iota/an-introduction-to-iota",
        description:
          "Learn about IOTA, the Tangle, its features, industry applications, network and more.",
      },
      {
        title: "Participate",
        image: "img/participate.svg",
        link: "participate/support-the-network/about-nodes",
        description:
          "Join the network and start using solutions built on top of the Tangle.",
      },
      {
        title: "Build",
        image: "img/build.svg",
        link: "build/welcome",
        description:
          "Access documentation and guides to build with IOTA in Rust and other languages.",
      },
    ],
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
