import { Field, Form, Formik } from "formik";
import { t } from "i18next";
import * as Yup from "yup";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";

export const Security = () => {
	const navigate = useNavigate();

	const initialValues = {
		email: "",
		currentPassword: "",
		newPassword: "",
	};

	const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	const validationSchema = Yup.object({
		email: Yup.string().matches(emailRegExp, t("emailInValid")).required(t("required")),
		currentPassword: Yup.string()
			.min(8, t("passwordLonger"))
			.max(20, t("passwordLess"))
			.required(t("required")),
		newPassword: Yup.string()
			.min(8, t("passwordLonger"))
			.max(20, t("passwordLess"))
			.required(t("required")),
	});

	const handleSubmit = (values) => {
		instance.put("user/security", values).then((res) => {
			console.log(res);
		});
	};

	return (
		<div className="max-w-[708px] mx-auto pt-[68px]">
			<h1 className="text-lg font-bold text-[#212121] mb-8">{t("userInfo.securityTitle")}</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}>
				{(formik) => {
					return (
						<Form className="flex flex-col">
							<>
								<label className="flex flex-col text-sm text-[#464E5F] mb-[22px]">
									{t("emailHolder")}
									<Field
										className="outline-none bg-[#F3F6F9] py-3 px-5 rounded"
										type="email"
										name="email"
										placeholder={t("emailHolder")}
									/>
									<span className="text-[#B5B5C3] text-xs mt-[3px]">
										{t("userInfo.emailMessage")}
									</span>
								</label>
								<label className="flex flex-col text-sm text-[#464E5F] mb-[16px]">
									{t("userInfo.currentPassword")}
									<Field
										className="outline-none bg-[#F3F6F9] py-3 px-5 rounded"
										type="password"
										name="currentPassword"
										placeholder={t("userInfo.currentPassword")}
									/>
									<span className="text-[#B5B5C3] text-xs mt-[3px]">
										{t("userInfo.currentPasswordMessage")}
									</span>
								</label>
								<label className="flex flex-col mb-[89px] text-sm text-[#464E5F]">
									{t("userInfo.newPassword")}
									<Field
										className="outline-none bg-[#F3F6F9] py-3 px-5 rounded"
										type="password"
										name="newPassword"
										placeholder={t("userInfo.newPassword")}
									/>
									<span className="text-[#B5B5C3] text-xs mt-[3px]">
										{t("userInfo.newPasswordMessage")}
									</span>
								</label>

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
							</>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};
