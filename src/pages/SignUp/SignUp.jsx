import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Sign_up from "../../assets/images/SignUp.png";
import axios from "axios";
import instance from "../../axios";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const initialValues = {
		first_name: "",
		last_name: "",
		phone: "",
		email: "",
		password: "",
	};

	const onSubmit = (values) => {
		console.log(values);
		instance.post("/user/register", values).then((res) => console.log(res));
	};

	const phoneRegExp =
		/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

	const validationSchema = Yup.object({
		first_name: Yup.string()
			.min(3, "First name must be longer 3 character")
			.max(20, "First name must be less 20 character")
			.required("Required !"),
		last_name: Yup.string()
			.min(3, "Last name must be longer 3 character")
			.max(20, "Last name must be less 20 character")
			.required("Required !"),
		phone: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.min(9, "Phone number's length must be more 7")
			.max(9, "Phone number's length must be less 13")
			.required("Required !"),
		email: Yup.string().email("Email is not valid").required("Required !"),
		password: Yup.string()
			.min(8, "Password must be longer 8 characters")
			.max(20, "Password must be less 20 characters")
			.required("Required !"),
	});

	return (
		<div className="w-screen h-screen flex">
			<div className="flex-1 flex flex-col items-center justify-center bg-[#C9AC8CED]">
				<img src={Sign_up} width={500} height={500} alt="One girl sitting on chair" />
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="max-w-[330px] w-full">
					<h1 className="font-arial font-black self-start text-4xl leading-[54px] mb-2.5">
						Sign up
					</h1>
					<span className="block mb-[21px] text-[13px] leading-6">
						Already have an account?{" "}
						<Link className="text-[#549FF9]" to="/">
							Sign in
						</Link>
					</span>
					<Formik
						onSubmit={onSubmit}
						initialValues={initialValues}
						validationSchema={validationSchema}>
						{(formik) => {
							return (
								<Form className="w-full flex flex-col gap-y-4 text-sm">
									<div className="flex flex-col">
										<Field
											className={`flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none ${
												formik.touched.first_name
													? formik.touched.first_name && !formik.errors.first_name
														? "border-success"
														: "border-error"
													: ""
											}`}
											type="text"
											name="first_name"
											placeholder="First name"
										/>
										{formik.touched.first_name ? (
											formik.touched.first_name && !formik.errors.first_name ? (
												<span className="valid-feedback">Looks good</span>
											) : (
												<ErrorMessage
													name="first_name"
													component={"span"}
													className="invalid-feedback d-block"
												/>
											)
										) : (
											""
										)}
									</div>
									<div className="flex flex-col">
										<Field
											className={`flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none ${
												formik.touched.last_name
													? formik.touched.last_name && !formik.errors.last_name
														? "border-success"
														: "border-error"
													: ""
											}`}
											type="text"
											name="last_name"
											placeholder="Last name"
										/>
										{formik.touched.last_name ? (
											formik.touched.last_name && !formik.errors.last_name ? (
												<span className="valid-feedback">Looks good</span>
											) : (
												<ErrorMessage
													name="last_name"
													component={"span"}
													className="invalid-feedback d-block"
												/>
											)
										) : (
											""
										)}
									</div>
									<div className="flex flex-col">
										<Field
											className={`flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none ${
												formik.touched.phone
													? formik.touched.phone && !formik.errors.phone
														? "border-success"
														: "border-error"
													: ""
											}`}
											type="tel"
											name="phone"
											placeholder="Phone"
										/>
										{formik.touched.phone ? (
											formik.touched.phone && !formik.errors.phone ? (
												<span className="valid-feedback">Looks good</span>
											) : (
												<ErrorMessage
													name="phone"
													component={"span"}
													className="invalid-feedback d-block"
												/>
											)
										) : (
											""
										)}
									</div>
									<div className="flex flex-col">
										<Field
											className={`flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none ${
												formik.touched.email
													? formik.touched.email && !formik.errors.email
														? "border-success"
														: "border-error"
													: ""
											}`}
											type="email"
											name="email"
											placeholder="Email"
										/>
										{formik.touched.email ? (
											formik.touched.email && !formik.errors.email ? (
												<span className="valid-feedback">Looks good</span>
											) : (
												<ErrorMessage
													name="email"
													component={"span"}
													className="invalid-feedback d-block"
												/>
											)
										) : (
											""
										)}
									</div>
									<div className="flex flex-col">
										<Field
											className={`flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none ${
												formik.touched.password
													? formik.touched.password && !formik.errors.password
														? "border-success"
														: "border-error"
													: ""
											}`}
											type="password"
											name="password"
											placeholder="Password"
										/>
										{formik.touched.password ? (
											formik.touched.password && !formik.errors.password ? (
												<span className="valid-feedback">Looks good</span>
											) : (
												<ErrorMessage
													name="password"
													component={"span"}
													className="invalid-feedback d-block"
												/>
											)
										) : (
											""
										)}
									</div>

									<button
										className="bg-[#152540] py-3.5 text-white font-medium text-lg rounded-full !font-roboto"
										disabled={formik.dirty && formik.isValid ? false : true}
										type="submit">
										Next step
									</button>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};
