import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Sign_up from "../../assets/images/SignUp.png";
import instance from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import { FieldComponent, FormikComponent } from "../../components";
import { useContext, useEffect } from "react";
import { t } from "i18next";
import { Authorization } from "../../Contexts";

export const SignUp = () => {
	const initialValues = {
		first_name: "",
		last_name: "",
		phone: "",
		email: "",
		password: "",
	};

	const navigate = useNavigate();

	const { setAuth } = useContext(Authorization);

	const onSubmit = (values) => {
		instance
			.post("/user/register", values)
			.then((res) => res.status === 201 && (navigate("/"), setAuth("hi")));
	};

	const phoneRegExp =
		/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

	const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
		email: Yup.string().matches(emailRegExp, t("sign_up.emailInValid")).required(t("required")),
		password: Yup.string()
			.min(8, t("sign_up.passwordLonger"))
			.max(20, t("sign_up.passwordLess"))
			.required(t("required")),
	});

	return (
		<div className="w-screen h-screen flex dark:bg-black">
			<div className="flex-1 flex flex-col items-center justify-center bg-[#C9AC8CED] dark:bg-[#D1B89DED]">
				<img src={Sign_up} width={500} height={500} alt={t("sign_up.imgAlt")} />
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="max-w-[330px] w-full">
					<h1 className="font-arial font-black self-start text-4xl leading-[54px] mb-2.5 dark:text-white">
						{t("sign_up.title")}
					</h1>
					<span className="block mb-[21px] text-[13px] leading-6 dark:text-white">
						{t("sign_up.signInText")}
						<Link className="text-[#549FF9]" to="/">
							{" "}
							{t("sign_up.signIn")}
						</Link>
					</span>
					<FormikComponent
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}>
						{(formik) => {
							return (
								<Form className="w-full flex flex-col gap-y-4 text-sm">
									<FieldComponent
										haveError={formik.errors.first_name}
										holder={t("sign_up.firstNameHolder")}
										isRequired={true}
										isTouched={formik.touched.first_name}
										name="first_name"
										type="text"
									/>
									<FieldComponent
										haveError={formik.errors.last_name}
										holder={t("sign_up.lastNameHolder")}
										isRequired={true}
										isTouched={formik.touched.last_name}
										name="last_name"
										type="text"
									/>
									<FieldComponent
										haveError={formik.errors.phone}
										holder={t("sign_up.phoneHolder")}
										isRequired={true}
										isTouched={formik.touched.phone}
										name="phone"
										type="tel"
									/>
									<FieldComponent
										haveError={formik.errors.email}
										holder={t("sign_up.emailHolder")}
										isRequired={true}
										isTouched={formik.touched.email}
										name="email"
										type="email"
									/>
									<FieldComponent
										haveError={formik.errors.password}
										holder={t("sign_up.passwordHolder")}
										isRequired={true}
										isTouched={formik.touched.password}
										name="password"
										type="password"
									/>

									<button
										className="bg-[#152540] py-3.5 text-white font-medium text-lg rounded-full !font-roboto dark:bg-white dark:text-black"
										disabled={formik.dirty && formik.isValid ? false : true}
										type="submit">
										{t("sign_up.submitBtn")}
									</button>
								</Form>
							);
						}}
					</FormikComponent>
				</div>
			</div>
		</div>
	);
};
