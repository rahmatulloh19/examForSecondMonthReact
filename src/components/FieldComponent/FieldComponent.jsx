import { Field } from "formik";
import { StatusForm } from "../StatusForm";

export const FieldComponent = ({
	isTouched,
	haveError,
	name,
	type,
	holder,
	isRequired,
	...others
}) => {
	return (
		<div className="w-full flex flex-col">
			<Field
				className={`w-full flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none dark:bg-black dark:text-white ${
					isTouched ? (isTouched && !haveError ? "border-success" : "border-error") : ""
				}`}
				type={type}
				name={name}
				placeholder={holder}
				required={isRequired ? isRequired : ""}
				{...others}
			/>
			{<StatusForm isTouched={isTouched} haveError={haveError} name={name} />}
		</div>
	);
};
