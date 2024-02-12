import { t } from "i18next";
import instance from "../../axios";
import { useEffect, useState } from "react";

export const Categories = ({ isBooks }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		instance.get("/genre").then((res) => setCategories(res.data));
	}, []);

	const array = new Array(22).fill(1);

	return (
		<section className="categories">
			<div className="container">
				<h2 className="text-[32px] leading-[48px] mb-3 text-center dark:text-[#C9AC8C] text-black">
					{t("categories.title")}
				</h2>
				<ul className="flex justify-center gap-x-[54px] mb-[30px]">
					{categories &&
						categories.map((item) => {
							if (item.id === 2) {
								return (
									<li key={item.id}>
										<label>
											<input
												className="visually-hidden categories__input"
												type="radio"
												defaultChecked
												name="timurid_period"
											/>
											<span className="cursor-pointer text-lg dark:text-[#ffffff99] text-[#0D0D0D99]">
												{item.name}
											</span>
										</label>
									</li>
								);
							}
							return (
								<li key={item.id}>
									<label
										className="cursor-pointer
									">
										<input
											className="visually-hidden categories__input"
											type="radio"
											name="timurid_period"
										/>
										<span className="text-lg dark:text-[#ffffff99] text-[#0D0D0D99]">
											{item.name}
										</span>
									</label>
								</li>
							);
						})}
				</ul>

				{!isBooks ? (
					<ul className="grid grid-cols-4 gap-x-5 gap-y-6">
						{array &&
							array.map((item, index) => (
								<li className="rounded-[22px] bg-[#F5F5F5] dark:bg-[#1E1E1E]" key={index}>
									<img
										className="rounded-t-[22px]"
										src="https://placehold.co/295x244"
										alt=""
										width={295}
										height={244}
									/>
									<div className="author__item min-h-[141px] p-4 pt-3 dark:text-[#C9AC8C] text-black rounded-b-[22px]">
										<h3 className="text-2xl font-bold leading-9 mb-1.5">Abdulla Avloniy</h3>
										<div className="flex justify-between">
											<span className="text-justify text-[#00000099] leading-6 dark:text-[#FFFFFF99]">
												1878-1934
											</span>
											<span className="text-justify text-[#00000099] leading-6 dark:text-[#FFFFFF99]">
												Uzbekiston
											</span>
										</div>
									</div>
								</li>
							))}
					</ul>
				) : (
					<ul className="grid grid-cols-6 gap-x-5 gap-y-6">
						{array &&
							array.map((item, index) => (
								<li key={index}>
									<img
										className="rounded-[15px] mb-3"
										src="https://placehold.co/190x283"
										width={190}
										height={283}
										alt=""
									/>
									<h3 className="text-lg font-bold leading-9 mb-1.5 dark:text-[#C9AC8C] text-black">
										Dunyoning ishlari
									</h3>
									<span className="text-justify text-[#00000099] leading-6 dark:text-[#FFFFFF99]">
										O’tkir Hoshimov
									</span>
								</li>
							))}
					</ul>
				)}
			</div>
		</section>
	);
};
