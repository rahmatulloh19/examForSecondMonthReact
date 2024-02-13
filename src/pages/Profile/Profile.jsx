import { FaRegUserCircle } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { t } from "i18next";
import instance from "../../axios";
import axios from "axios";

export const Profile = () => {
	let initialValues = {
		first_name: "",
		last_name: "",
		image: null,
		phone: "",
	};

	const phoneRegExp =
		/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

	const validationSchema = Yup.object({
		first_name: Yup.string()
			.min(3, t("sign_up.firstNameLonger"))
			.max(20, t("sign_up.firstNameLess"))
			.required(t("required")),
		last_name: Yup.string()
			.min(3, t("sign_up.lastNameLonger"))
			.max(20, t("sign_up.lastNameLess"))
			.required(t("required")),
		phone: Yup.string()
			.matches(phoneRegExp, t("sign_up.phoneInValid"))
			.min(9, t("sign_up.phoneLength"))
			.max(9, t("sign_up.phoneLength"))
			.required(t("required")),
	});

	const handleSubmit = (values) => {
		const formData = new FormData();

		for (const key in values) {
			if (Object.hasOwnProperty.call(values, key)) {
				const element = values[key];

				if (key !== "id" && key !== "email") {
					formData.set(key, element);
				}
			}
		}
		instance
			.putForm("/user/account", formData)
			.then((res) => {
				res && window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			{(formik) => {
				!initialValues.first_name &&
					!formik.values.first_name &&
					instance("/user/me").then((res) => {
						res.status === 201 && formik.setValues(res.data);
						initialValues = res.data;
					});

				return (
					<Form>
						<div className="flex gap-x-[109px] mx-auto w-[993px] pt-[83px] pb-[89px] items-start">
							<div className="relative w-[175px] h-[175px]">
								{initialValues.image ? (
									<img
										className="rounded-full object-cover w-full h-full"
										width={175}
										height={175}
										src={"http://localhost:5000/" + initialValues.image}
										alt=""
									/>
								) : (
									<FaRegUserCircle className="text-[#0D0D0D] dark:text-white shrink-0 w-[175px] h-[175px]" />
								)}
								<label className="absolute bottom-0 right-0 dark:bg-[#161616] p-2 bg-[#F3F6F9] rounded-lg cursor-pointer">
									<svg
										width={33}
										height={33}
										viewBox="0 0 33 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_1_879)">
											<path
												d="M30.9285 24.75C30.9285 25.297 30.7113 25.8216 30.3245 26.2084C29.9377 26.5952 29.4131 26.8125 28.8662 26.8125H4.11756C3.57059 26.8125 3.04601 26.5952 2.65924 26.2084C2.27247 25.8216 2.05518 25.297 2.05518 24.75V12.375C2.05518 11.828 2.27247 11.3034 2.65924 10.9166C3.04601 10.5298 3.57059 10.3125 4.11756 10.3125H6.53468C8.17476 10.3116 9.74739 9.65952 10.9069 8.49956L12.6187 6.79181C13.0044 6.406 13.5272 6.18871 14.0727 6.1875H18.9069C19.4538 6.18762 19.9783 6.40499 20.365 6.79181L22.0727 8.49956C22.6473 9.07441 23.3296 9.5304 24.0805 9.84147C24.8314 10.1525 25.6363 10.3126 26.449 10.3125H28.8662C29.4131 10.3125 29.9377 10.5298 30.3245 10.9166C30.7113 11.3034 30.9285 11.828 30.9285 12.375V24.75ZM4.11756 8.25C3.02361 8.25 1.97446 8.6846 1.20091 9.45818C0.42737 10.2318 -0.00720215 11.281 -0.00720215 12.375L-0.00720215 24.75C-0.00720215 25.844 0.42737 26.8932 1.20091 27.6668C1.97446 28.4404 3.02361 28.875 4.11756 28.875H28.8662C29.9601 28.875 31.0093 28.4404 31.7828 27.6668C32.5564 26.8932 32.9909 25.844 32.9909 24.75V12.375C32.9909 11.281 32.5564 10.2318 31.7828 9.45818C31.0093 8.6846 29.9601 8.25 28.8662 8.25H26.449C25.3552 8.24977 24.3062 7.81502 23.5328 7.04138L21.8252 5.33362C21.0518 4.55998 20.0028 4.12523 18.909 4.125H14.0747C12.9809 4.12523 11.9319 4.55998 11.1585 5.33362L9.45089 7.04138C8.67752 7.81502 7.62854 8.24977 6.53468 8.25H4.11756Z"
												fill="#464E5F"
											/>
											<path
												d="M16.4921 22.6875C15.1247 22.6875 13.8132 22.1443 12.8463 21.1773C11.8794 20.2103 11.3361 18.8988 11.3361 17.5312C11.3361 16.1637 11.8794 14.8522 12.8463 13.8852C13.8132 12.9182 15.1247 12.375 16.4921 12.375C17.8595 12.375 19.171 12.9182 20.1379 13.8852C21.1048 14.8522 21.6481 16.1637 21.6481 17.5312C21.6481 18.8988 21.1048 20.2103 20.1379 21.1773C19.171 22.1443 17.8595 22.6875 16.4921 22.6875ZM16.4921 24.75C18.4065 24.75 20.2425 23.9895 21.5962 22.6357C22.9499 21.2819 23.7104 19.4458 23.7104 17.5312C23.7104 15.6167 22.9499 13.7806 21.5962 12.4268C20.2425 11.073 18.4065 10.3125 16.4921 10.3125C14.5777 10.3125 12.7417 11.073 11.388 12.4268C10.0343 13.7806 9.27376 15.6167 9.27376 17.5312C9.27376 19.4458 10.0343 21.2819 11.388 22.6357C12.7417 23.9895 14.5777 24.75 16.4921 24.75ZM6.18018 13.4062C6.18018 13.6798 6.07154 13.9421 5.87815 14.1355C5.68477 14.3289 5.42248 14.4375 5.14899 14.4375C4.8755 14.4375 4.61321 14.3289 4.41983 14.1355C4.22644 13.9421 4.1178 13.6798 4.1178 13.4062C4.1178 13.1327 4.22644 12.8704 4.41983 12.677C4.61321 12.4836 4.8755 12.375 5.14899 12.375C5.42248 12.375 5.68477 12.4836 5.87815 12.677C6.07154 12.8704 6.18018 13.1327 6.18018 13.4062Z"
												fill="#464E5F"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1_879">
												<rect
													width="32.9981"
													height={33}
													fill="white"
													transform="translate(-0.00720215)"
												/>
											</clipPath>
										</defs>
									</svg>
									<input
										className="visually-hidden"
										accept="image/*"
										type="file"
										name="image"
										onBlur={formik.handleBlur("")}
										onChange={(evt) => {
											console.log(formik.getFieldProps("image"));
											formik.setFieldValue("image", evt.target.files[0]);
										}}
									/>
								</label>
							</div>
							<div className="grow pt-11">
								<h2 className="text-lg font-bold text-[#212121] dark:text-[#DEDEDE] mb-8">
									{t("userInfo.my")}
								</h2>
								<div className="flex flex-col">
									<label className="flex mb-[22px] flex-col text-sm dark:text-[#F3F6F9] text-[#464E5F]">
										{t("userInfo.firstNameLabel")}
										<Field
											className="mt-[7px] mb-[3px] outline-none py-3 px-5 rounded dark:text-black bg-[#F3F6F9]"
											type="text"
											name="first_name"
											placeholder={t("sign_up.firstNameHolder")}
										/>
										<span className=" text-[#B5B5C3]">{t("userInfo.firstNameMessage")}</span>
									</label>
									<label className="flex mb-[16px] flex-col text-sm dark:text-[#F3F6F9] text-[#464E5F]">
										{t("userInfo.lastNameLabel")}
										<Field
											className="mt-[7px] mb-[3px] outline-none py-3 px-5 rounded dark:text-black bg-[#F3F6F9]"
											type="text"
											name="last_name"
											placeholder={t("sign_up.lastNameHolder")}
										/>
										<span className=" text-[#B5B5C3]">{t("userInfo.lastNameMessage")}</span>
									</label>
									<label className="flex mb-[71px] flex-col text-sm dark:text-[#F3F6F9] text-[#464E5F]">
										{t("userInfo.phoneLabel")}
										<Field
											className="mt-[7px] mb-[3px] outline-none py-3 px-5 rounded dark:text-black bg-[#F3F6F9]"
											type="text"
											name="phone"
											placeholder={t("sign_up.phoneHolder")}
										/>
										<span className=" text-[#B5B5C3]">{t("userInfo.phoneMessage")}</span>
									</label>

									<button
										className="dark:bg-[#F1F6FF] py-3 min-w-[142px] text-center text-sm font-bold ms-auto px-5 rounded dark:text-[#0D0D0D] bg-[#152540] text-white"
										type="submit">
										{t("userInfo.btnSubmit")}
									</button>
								</div>
							</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};
