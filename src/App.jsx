import { Authorization, AuthorizationProvider } from "./Contexts/Authorization/Authorization";
import instance from "./axios";
import "./i18n";
import { useTranslation } from "react-i18next";
import { Private, Public } from "./app/";
import { useContext } from "react";

function App() {
	const { auth } = useContext(Authorization);
	if (auth) {
		instance.defaults.headers.common["Authorization"] = auth;
	}

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

	if (auth || localStorage.getItem("token")) {
		return <Private />;
	}

	return <Public />;
}

export default App;
