import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
	const navigate = useNavigate();
	const { i18n } = useTranslation();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		!evt.target[1].checked &&
		document.querySelector("html").classList.contains("dark") &&
		!localStorage.getItem("mode")
			? removeDark()
			: addDark();

		localStorage.setItem("lang", evt.target[0].value);
		i18n.changeLanguage(evt.target[0].value);
	};

	if (localStorage.getItem("mode")) {
		document.querySelector("html").classList.add("dark");
	}
	function addDark() {
		document.querySelector("html").classList.add("dark");
		localStorage.setItem("mode", "dark");
	}

	function removeDark() {
		document.querySelector("html").classList.remove("dark");
		localStorage.removeItem("mode");
	}

	return (
		<div className="max-w-[709px] w-full mx-auto flex flex-col justify-center grow">
			<h1 className="text-lg font-bold text-[#212121] mb-8">{t("userInfo.settings")}</h1>
			<form onSubmit={handleSubmit}>
				<label className="text-[#464E5F] text-sm mb-2.5 dark:text-white">
					{t("userInfo.language")}
					<select
						className="text-black mt-[7px] w-full outline-none bg-[#F3F6F9] py-3 px-5 rounded"
						name="lang"
						defaultValue={localStorage.getItem("lang")}>
						<option value="en">English</option>
						<option value="ru">Pусский</option>
						<option value="uz">O'zbek</option>
					</select>
					<span className="text-[#B5B5C3] text-xs dark:text-white">
						{t("userInfo.languageMessage")}
					</span>
				</label>
				<label className="relative mt-2.5 flex-wrap flex items-center cursor-pointer">
					<span className="dark:text-white text-sm text-[#464E5F] mb-[5px] w-full">
						{t("userInfo.theme")}
					</span>
					<input
						type="checkbox"
						defaultChecked={localStorage.getItem("mode")}
						className="sr-only peer"
					/>
					<div className="w-[87px] h-[30px] bg-[#F3F6F9] peer-focus:outline-none rounded-full peer shadow-xl peer-checked:after:translate-x-[57px] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[26px] after:start-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:after:bg-[#3699FF] "></div>
				</label>
				<div className="mb-8 w-full h-0.5 bg-[#ECF0F3] mt-10"></div>

				<div className="flex justify-end gap-4">
					<button
						className="dark:bg-[#F1F6FF] py-3 min-w-[142px] text-center text-sm font-bold px-5 rounded dark:text-[#0D0D0D] bg-[#152540] text-white"
						type="button"
						onClick={() => navigate("/")}>
						{t("userInfo.btnBack")}
					</button>
					<button
						className="dark:bg-[#F1F6FF] py-3 min-w-[142px] text-center text-sm font-bold px-5 rounded dark:text-[#0D0D0D] bg-[#152540] text-white"
						type="submit">
						{t("userInfo.btnSubmit")}
					</button>
				</div>
			</form>
		</div>
	);
};
