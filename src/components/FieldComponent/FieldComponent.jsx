import { Field } from "formik";
import { StatusForm } from "../StatusForm";

export const FieldComponent = ({ isTouched, haveError, name, type, holder, isRequired }) => {
	return (
		<div className="flex flex-col">
			<Field
				className={`flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none ${
					isTouched ? (isTouched && !haveError ? "border-success" : "border-error") : ""
				}`}
				type={type}
				name={name}
				placeholder={holder}
				required={isRequired ? isRequired : ""}
			/>
			{<StatusForm isTouched={isTouched} haveError={haveError} name={name} />}
		</div>
	);
};
