import { t } from "i18next";

export const DragAndDrop = ({ setFieldValue }) => {
	return (
		<label className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-[#0000004d] rounded-[17px] w-[315px] h-[428px] bg-[#F8F8F8] dark:bg-[#4D4D4D] dark:border-[#FFFFFF4D]">
			<svg
				className="text-[#AEAEAE] dark:text-[#828282]"
				width={63}
				height={62}
				viewBox="0 0 63 62"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.3" clipPath="url(#clip0_1_2818)">
					<path
						d="M10.1875 31H52.8125"
						stroke="currentColor"
						strokeWidth="3.875"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M31.5 9.6875V52.3125"
						stroke="currentColor"
						strokeWidth="3.875"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1_2818">
						<rect width={62} height={62} fill="white" transform="translate(0.5)" />
					</clipPath>
				</defs>
			</svg>

			<span className="text-xs text-center max-w-[169px] mt-2 dark:text-[#828282] text-[#AEAEAE]">
				{t("adding_page.dragAndDrop")}
			</span>

			<input
				className="visually-hidden"
				required
				type="file"
				accept=".png, .jpeg"
				onChange={(evt) => setFieldValue("image", evt.target.files[0])}
			/>
		</label>
	);
};
