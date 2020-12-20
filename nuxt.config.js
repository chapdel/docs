import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#1f8366",
  },
  loading: { color: "#37384e" },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-174901144-1",
      },
    ],
  ],
});
