import { t } from "i18next";
import instance from "../../axios";
import { useContext } from "react";
import { SearchValue } from "../../Contexts";

export const Search = ({ name }) => {
	const { setSearchValue } = useContext(SearchValue);

	const handleSearch = (evt) => {
		evt.preventDefault();

		instance.get(`/${name}/search?${name}=${evt.target[0].value}`).then((res) => {
			setSearchValue(res.data);
		});
	};

	return (
		<article className="absolute w-[1030px] py-[29px] px-[73px] bg-white dark:bg-[#191919] top-[268px] z-10 h-[163px] left-2/4 -translate-x-2/4 rounded-2xl">
			<h2 className="text-center text-[32px] leading-[48px] text-[#D1B89D] dark:text-[#C9AC8C] mb-[9px]">
				{t("search.title")}
			</h2>
			<form className="flex gap-x-3.5" onSubmit={handleSearch}>
				<input
					className="bg-[#F5F5F5] dark:bg-[] grow py-3 px-[27px] outline-none rounded-[15px]"
					type="text"
					name={name}
					placeholder={t("search.holder")}
				/>
				<button
					className="btn leading-6 w-40 flex gap-x-1.5 dark:bg-[#C9AC8C] text-[#EFDAC3] bg-[#C9AC8C] dark:text-[#3C2710]"
					type="submit">
					<svg
						width={25}
						height={24}
						viewBox="0 0 25 24"
						className=""
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.5 18C12.346 18 14.043 17.365 15.397 16.312L19.793 20.708L21.207 19.294L16.811 14.898C17.865 13.543 18.5 11.846 18.5 10C18.5 5.589 14.911 2 10.5 2C6.089 2 2.5 5.589 2.5 10C2.5 14.411 6.089 18 10.5 18ZM10.5 4C13.809 4 16.5 6.691 16.5 10C16.5 13.309 13.809 16 10.5 16C7.191 16 4.5 13.309 4.5 10C4.5 6.691 7.191 4 10.5 4Z"
							fill="currentColor"
						/>
						<path
							d="M11.9121 8.58603C12.2911 8.96603 12.5001 9.46802 12.5001 10H14.5001C14.5001 8.93502 14.0841 7.93102 13.3261 7.17202C11.8121 5.66002 9.18707 5.66002 7.67407 7.17202L9.08607 8.58803C9.84607 7.83003 11.1561 7.83203 11.9121 8.58603Z"
							fill="currentColor"
						/>
					</svg>

					{t("search.btn")}
				</button>
			</form>
		</article>
	);
};
