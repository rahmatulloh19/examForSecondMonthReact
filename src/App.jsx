import { Authorization, AuthorizationProvider } from "./Contexts/Authorization/Authorization";
import instance from "./axios";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
	// console.log(Authorization, AuthorizationProvider);
	// instance.get("/auth/me").then((res) => {
	// 	res.data.token ? localStorage.setItem("token_key", res.data.token) : "";
	// });
	// const { t } = useTranslation();
	// return <h1>{t("h1")}</h1>;
}

export default App;
