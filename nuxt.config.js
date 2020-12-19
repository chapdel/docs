import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#1f8366",
  },
  loading: { color: "#37384e" },
  i18n: {
    locales: () => [
      /* {
        code: "fr",
        iso: "fr-FR",
        file: "~assets/i18n/fr.js",
        name: "Français",
      }, */
      {
        code: "en",
        iso: "en-US",
        file: "~assets/i18n/en.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
  },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-174901144-1",
      },
    ],
  ],
});
