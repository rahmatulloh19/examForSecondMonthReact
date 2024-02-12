import { BrowserRouter } from "react-router-dom";
import { AuthorizationProvider } from "../Authorization";
import { SearchValueProvider } from "../SearchValue";

export const Providers = ({ children }) => {
	return (
		<BrowserRouter>
			<AuthorizationProvider>
				<SearchValueProvider>{children}</SearchValueProvider>
			</AuthorizationProvider>
		</BrowserRouter>
	);
};
