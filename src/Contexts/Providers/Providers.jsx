import { BrowserRouter } from "react-router-dom";
import { AuthorizationProvider } from "../Authorization";

export const Providers = ({ children }) => {
	return (
		<BrowserRouter>
			<AuthorizationProvider>{children}</AuthorizationProvider>
		</BrowserRouter>
	);
};
