import { ErrorMessage } from "formik";
import { t } from "i18next";

export const StatusForm = ({ isTouched, haveError, name }) => {
	return isTouched ? (
		isTouched && !haveError ? (
			<span className="valid-feedback">{t("good")}</span>
		) : (
			<ErrorMessage name={name} component={"span"} className="invalid-feedback d-block" />
		)
	) : (
		""
	);
};
