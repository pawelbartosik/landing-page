import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/translation/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "pl",
    debug: false,
    ns: ["common"],

    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
