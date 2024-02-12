import { t } from "i18next";

export const Info = () => {
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
						<h2 className="dark:text-[#C9AC8C] text-black mb-2 text-5xl leading-[72px]">
							O’tkir Hoshimov
						</h2>
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
					</div>
				</div>
			</div>
		</section>
	);
};
