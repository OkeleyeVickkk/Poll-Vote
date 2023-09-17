import React from "react";
import Icon from "./Icon";

const InputField = ({ label, icon, type, placeholder, value, onChangeFunc }) => {
	return (
		<div className="relative">
			{label && (
				<label className="font-bold text-sm text-black/80" htmlFor="">
					{label}
				</label>
			)}
			<input
				className={`min-h-[2.9rem] rounded-md w-full outline-none focus:outline-none border px-4 transition ease-linear focus:border-primary`}
				type={type}
				onChange={onChangeFunc}
				placeholder={placeholder}
				value={value}
			/>
			<Icon iconName={icon} style="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5" />
		</div>
	);
};

export default InputField;
