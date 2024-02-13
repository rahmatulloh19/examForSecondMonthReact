import { Outlet } from "react-router-dom";
import { UserNavbar } from "../../components";

export const UserInfo = () => {
	return (
		<div className="max-w-[1700px] mx-auto w-full dark:bg-[#191919] bg-white">
			<UserNavbar />
			<Outlet />
		</div>
	);
};
