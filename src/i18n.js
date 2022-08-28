import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next.use(initReactI18next).use(languageDetector).use(Backend).init({
    fallbackLng: "en",
});
