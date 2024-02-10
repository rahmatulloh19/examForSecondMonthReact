import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "../../pages";
import { NotFound } from "../../components";

export const Public = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route index element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
		</Routes>
	);
};
