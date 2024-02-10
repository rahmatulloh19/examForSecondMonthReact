import { Authorization, AuthorizationProvider } from "./Contexts/Authorization/Authorization";
import instance from "./axios";
import "./i18n";
import { useTranslation } from "react-i18next";
import { Private, Public } from "./app/";
import { useContext } from "react";

function App() {
	const { auth } = useContext(Authorization);

	// <button
	// 	onClick={() => {
	// 		document.body.classList.contains("dark") ? removeDark() : addDark();
	// 	}}>
	// 	Click
	// </button>;

	// if (localStorage.getItem("mode")) {
	// 	document.body.classList.add("dark");
	// }
	// function addDark() {
	// 	document.body.classList.add("dark");
	// 	localStorage.setItem("mode", "dark");
	// }

	// function removeDark() {
	// 	document.body.classList.remove("dark");
	// 	localStorage.removeItem("mode");
	// }

	if (auth) {
		return <Private />;
	}

	return <Public />;
	// console.log(Authorization, AuthorizationProvider);
	// instance.get("/auth/me").then((res) => {
	// 	res.data.token ? localStorage.setItem("token_key", res.data.token) : "";
	// });
	// const { t } = useTranslation();
	// return <h1>{t("h1")}</h1>;
}

export default App;
