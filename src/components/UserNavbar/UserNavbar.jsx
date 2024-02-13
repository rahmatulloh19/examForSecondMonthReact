import { t } from "i18next";
import { NavLink } from "react-router-dom";

export const UserNavbar = () => {
	return (
		<nav className="dark:bg-[#2D2D2D] bg-[#f8fafb]">
			<ul className="grid grid-cols-3">
				<li className="">
					<NavLink
						className={({ isActive }) =>
							isActive
								? "w-full p-[23px] block font-bold text-sm active-user-nav"
								: "w-full p-[23px] block font-bold text-sm dark:text-[#a3a3a3]"
						}
						to="/user-info"
						end>
						<span className="w-[35px] h-[35px] inline-flex items-center justify-center me-2 rounded border border-[#E5EAEE] bg-[#E5EAEE] dark:bg-transparent text-[#3699FF] dark:text-[#a3a3a3]">
							1
						</span>
						{t("userInfo.profile")}
					</NavLink>
				</li>
				<li className="">
					<NavLink
						className={({ isActive }) =>
							isActive
								? "w-full p-[23px] block font-bold text-sm active-user-nav"
								: "w-full p-[23px] block font-bold text-sm dark:text-[#a3a3a3]"
						}
						to="security"
						end>
						<span className="w-[35px] h-[35px] inline-flex items-center justify-center me-2 rounded border border-[#E5EAEE] bg-[#E5EAEE] dark:bg-transparent text-[#3699FF] dark:text-[#a3a3a3]">
							2
						</span>
						{t("userInfo.security")}
					</NavLink>
				</li>
				<li className="">
					<NavLink
						className={({ isActive }) =>
							isActive
								? "w-full p-[23px] block font-bold text-sm active-user-nav"
								: "w-full p-[23px] block font-bold text-sm dark:text-[#a3a3a3]"
						}
						to="settings"
						end>
						<span className="w-[35px] h-[35px] inline-flex items-center justify-center me-2 rounded border border-[#E5EAEE] bg-[#E5EAEE] dark:bg-transparent text-[#3699FF] dark:text-[#a3a3a3]">
							3
						</span>
						{t("userInfo.settings")}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
