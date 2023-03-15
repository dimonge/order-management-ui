module.exports = {
  locales: ["en", "fi", "se", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en"
  },
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      include: ["src/pages", "src/components"],
      "exclude": ["**/node_modules/**"]
    }
  ],
  format: "po"
}