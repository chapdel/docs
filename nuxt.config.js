import theme from "@notchafrica/content-theme-extended-docs";

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
  server: {
    port: 30002, // default: 3000
    host: "localhost", // default: localhost
  },
});
