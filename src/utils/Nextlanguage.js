import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import textEng from "../locale/en/en.json";
import textRu from "../locale/ru/ru.json";
import textUz from "../locale/uz/uz.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: textEng,
      ru: textRu,
      uz: textUz,
    },
  });

export default i18n;
