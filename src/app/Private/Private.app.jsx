import { Route, Routes } from "react-router-dom";
import { NotFound } from "../../components";
import {
	AddingPage,
	Books,
	Home,
	Profile,
	Security,
	Settings,
	SinglePage,
	UserInfo,
} from "../../pages";

export const Private = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route index element={<Home />} />
			<Route path="/books" element={<Books />} />
			<Route path="/author/:id" element={<SinglePage />} />
			<Route path="/book/:id" element={<SinglePage isBook={true} />} />
			<Route path="user-info" element={<UserInfo />}>
				<Route index element={<Profile />} />
				<Route path="security" element={<Security />} />
				<Route path="settings" element={<Settings />} />
			</Route>
			<Route path="/add-book" element={<AddingPage />} />
			<Route path="/add-author" element={<AddingPage />} />
		</Routes>
	);
};
