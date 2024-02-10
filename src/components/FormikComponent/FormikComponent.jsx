import { Formik } from "formik";

export const FormikComponent = ({ children, onSubmit, initialValues, validationSchema }) => {
	return (
		<Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
			{children}
		</Formik>
	);
};
