import { AuthorizationProvider } from "./Authorization/Authorization";

export const Provider = ({ children }) => {
	return <AuthorizationProvider>{children}</AuthorizationProvider>;
};
