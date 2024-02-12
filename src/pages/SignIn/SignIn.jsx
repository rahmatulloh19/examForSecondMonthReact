import { Form } from "formik";
import * as Yup from "yup";
import sign_in from "../../assets/images/signIn.svg";
import instance from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import { FieldComponent, FormikComponent } from "../../components";
import { useContext } from "react";
import { t } from "i18next";
import { Authorization } from "../../Contexts";

export const SignIn = () => {
	const initialValues = {
		email: "",
		password: "",
	};

	const navigate = useNavigate();

	const { setAuth } = useContext(Authorization);

	const onSubmit = (values) => {
		instance
			.post("/user/login", values)
			.then(
				(res) =>
					res.status === 201 &&
					(navigate("/", { replace: true }),
					localStorage.setItem("token", res.data.token),
					setAuth(res.data.token))
			);
	};

	const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	const validationSchema = Yup.object({
		email: Yup.string().matches(emailRegExp, t("emailInValid")).required(t("required")),
		password: Yup.string()
			.min(8, t("passwordLonger"))
			.max(20, t("passwordLess"))
			.required(t("required")),
	});

	return (
		<div className="w-screen h-screen flex dark:bg-black">
			<div className="flex-1 flex flex-col items-center justify-center bg-[#C9AC8CED] dark:bg-[#D1B89DED]">
				<img src={sign_in} width={500} height={500} alt={t("sign_in.imgAlt")} />
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="max-w-[330px] w-full">
					<h1 className="font-arial font-black self-start text-4xl leading-[54px] mb-2.5 dark:text-white">
						{t("sign_in.title")}
					</h1>
					<span className="block mb-[21px] text-[13px] leading-6 dark:text-white">
						{t("sign_in.signUpText")}
						<Link className="text-[#549FF9]" to="/sign-up">
							{" "}
							{t("sign_in.signUp")}
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
										haveError={formik.errors.email}
										holder={t("emailHolder")}
										isRequired={true}
										isTouched={formik.touched.email}
										name="email"
										type="email"
									/>
									<FieldComponent
										haveError={formik.errors.password}
										holder={t("passwordHolder")}
										isRequired={true}
										isTouched={formik.touched.password}
										name="password"
										type="password"
									/>

									<button
										className="bg-[#152540] py-3.5 text-white font-medium text-lg rounded-full !font-roboto dark:bg-white dark:text-black"
										disabled={formik.dirty && formik.isValid ? false : true}
										type="submit">
										{t("submitBtn")}
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
