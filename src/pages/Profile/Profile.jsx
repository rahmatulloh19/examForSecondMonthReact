import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { t } from "i18next";
import instance from "../../axios";

export const Profile = () => {
	const initialValues = {
		first_name: "",
		last_name: "",
		image: "",
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
		console.log(values);
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
						localStorage.setItem("name", "Hello");
					});

				return (
					<div className="flex gap-x-[109px] mx-auto w-[993px] pt-[83px] pb-[89px] items-start">
						<img src="https://placehold.co/175x175" width={175} height={175} alt="" />
						<div className="grow pt-11">
							<h2 className="text-lg font-bold text-[#212121] dark:text-[#DEDEDE] mb-8">
								{t("userInfo.my")}
							</h2>
							<Form className="flex flex-col">
								<label className="flex mb-[22px] flex-col text-sm dark:text-[#F3F6F9]">
									{t("userInfo.firstNameLabel")}
									<Field
										className="mt-[7px] mb-[3px] outline-none py-3 px-5 rounded dark:text-black"
										type="text"
										name="first_name"
										placeholder={t("sign_up.firstNameHolder")}
									/>
									<span>{t("userInfo.firstNameMessage")}</span>
								</label>
								<label className="flex mb-[16px] flex-col text-sm dark:text-[#F3F6F9]">
									{t("userInfo.lastNameLabel")}
									<Field
										className="mt-[7px] mb-[3px] outline-none py-3 px-5 rounded dark:text-black"
										type="text"
										name="last_name"
										placeholder={t("sign_up.lastNameHolder")}
									/>
									<span>{t("userInfo.lastNameMessage")}</span>
								</label>
								<label className="flex mb-[71px] flex-col text-sm dark:text-[#F3F6F9]">
									{t("userInfo.phoneLabel")}
									<Field
										className="mt-[7px] mb-[3px] outline-none py-3 px-5 rounded dark:text-black"
										type="text"
										name="phone"
										placeholder={t("sign_up.phoneHolder")}
									/>
									<span>{t("userInfo.phoneMessage")}</span>
								</label>

								<button
									className="dark:bg-[#F1F6FF] py-3 min-w-[142px] text-center text-sm font-bold ms-auto px-5 rounded dark:text-[#0D0D0D]"
									type="submit">
									{t("userInfo.btnSubmit")}
								</button>
							</Form>
						</div>
					</div>
				);
			}}
		</Formik>
	);
};
