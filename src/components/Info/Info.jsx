import { t } from "i18next";

export const Info = ({ isBook }) => {
	return (
		<section className="pt-3.5">
			<div className="container">
				<div className="flex gap-x-16 mb-[100px]">
					<img
						className="rounded-[20px]"
						src="https://placehold.co/505x681"
						width={505}
						height={681}
						alt
					/>
					<div className="pt-11">
						<h1 className="dark:text-[#C9AC8C] text-[#D1B89D] mb-2 text-5xl leading-[72px]">
							O’tkir Hoshimov
						</h1>
						{isBook && (
							<ol className="mb-10">
								<li className="flex justify-between mb-3.5 text-[#0D0D0D99] dark:text-[#FFFFFF99] text-[20px] leading-[30px]">
									{t("singlePage.pages")}
									<strong className="dark:text-white text-[#0D0D0D]">
										376 {t("singlePage.page")}
									</strong>
								</li>
								<li className="flex justify-between mb-3.5 text-[#0D0D0D99] dark:text-[#FFFFFF99] text-[20px] leading-[30px]">
									{t("singlePage.published")}
									<strong className="dark:text-white text-[#0D0D0D]">
										376 {t("singlePage.year")}
									</strong>
								</li>
								<li className="flex justify-between mb-3.5 text-[#0D0D0D99] dark:text-[#FFFFFF99] text-[20px] leading-[30px]">
									{t("singlePage.price")}
									<strong className="dark:text-white text-[#0D0D0D]">$376</strong>
								</li>
							</ol>
						)}
						{isBook && (
							<div className="flex items-center mb-3">
								<span className="dark:text-[#C9AC8C] text-[#D1B89D]">
									{t("singlePage.fullInfo")}
								</span>
								<svg
									className="ms-[11px] dark:text-white"
									width={8}
									height={12}
									viewBox="0 0 8 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.18198 -0.0098877V10.3027L0.853553 7.97428C0.658291 7.77902 0.341709 7.77902 0.146447 7.97428C-0.0488155 8.16954 -0.0488155 8.48612 0.146447 8.68139L3.32843 11.8634C3.52369 12.0586 3.84027 12.0586 4.03553 11.8634L7.21751 8.68139C7.41278 8.48612 7.41278 8.16954 7.21751 7.97428C7.02225 7.77902 6.70567 7.77902 6.51041 7.97428L4.18198 10.3027V-0.0098877H3.18198Z"
										fill="currentColor"
									/>
								</svg>
								<div className="ms-[19px] h-0.5 grow bg-[#D1B89D99] dark:bg-[#C9AC8C99]"></div>
							</div>
						)}
						<p className="dark:text-[#FFFFFFCC] text-[#0D0D0DCC] leading-6 mb-11">
							Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi
							Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent
							Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika
							kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963
							yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat
							tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida
							adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ.
							Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985)
							boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995
							yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot
							qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib
							ishladi.
						</p>
						{!isBook && (
							<div className="flex dark:text-[#C9AC8C] text-black items-center gap-x-4 text-xs leading-[18px]">
								<div className="flex flex-col dark:text-[#FFFFFFCC] text-[#0D0D0DCC]">
									{t("singlePage.dateBirth")}
									<strong className="dark:text-[#C9AC8C] text-black font-normal text-[39px] leading-[56px]">
										1941
									</strong>
									Toshkent, Uzbekistan
								</div>
								<span className="text-[39px]">-</span>
								<div className="flex flex-col dark:text-[#FFFFFFCC] text-[#0D0D0DCC]">
									{t("singlePage.dateDead")}
									<strong className="dark:text-[#C9AC8C] text-black font-normal text-[39px] leading-[56px]">
										2013
									</strong>
									Toshkent, Uzbekistan
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
