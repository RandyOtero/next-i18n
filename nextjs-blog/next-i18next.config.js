/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: false,
  cleanCode: true,
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "es"],
    localeDetection: true,
  },
  trailingSlash: true,
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  fallbackLng: false,
  reloadOnPrerender: true,
  ns: ["common"],
};
