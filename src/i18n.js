import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ru, uz } from "./lang";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		ru: {
			translation: ru,
		},
		uz: {
			translation: uz,
		},
	},
	debug: true,
	fallbackLng: ["en", "ru", "uz"],
	lng: localStorage.getItem("lang") || "en",

	interpolation: {
		escapeValue: false,
	},
});
