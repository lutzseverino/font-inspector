import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    load: "languageOnly",
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    preload: ["en", "es"],
    defaultNS: "metadata",
    fallbackNS: "",
    ns: [],
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
