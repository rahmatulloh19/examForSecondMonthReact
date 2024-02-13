import { Authorization } from "./Contexts/Authorization/Authorization";
import instance from "./axios";
import "./i18n";
import { Private, Public } from "./app/";
import { useContext } from "react";

function App() {
	const { auth } = useContext(Authorization);
	if (auth) {
		instance.defaults.headers.common["Authorization"] = auth;
	}

	if (auth || localStorage.getItem("token")) {
		return <Private />;
	}

	return <Public />;
}

export default App;
