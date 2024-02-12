import { createContext, useState } from "react";

export const Authorization = createContext();

export const AuthorizationProvider = ({ children }) => {
	const [auth, setAuth] = useState(localStorage.getItem("token") || "");

	return <Authorization.Provider value={{ auth, setAuth }}>{children}</Authorization.Provider>;
};
