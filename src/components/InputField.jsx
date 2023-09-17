import { forwardRef } from "react";
import Icon from "./Icon";

const InputField = forwardRef(({ label, icon, type, placeholder, value, onChangeFunc }, ref) => {
	return (
		<div className="relative group">
			{label && (
				<label className="font-bold text-sm text-black/80" htmlFor="">
					{label}
				</label>
			)}
			<input
				className={`min-h-[3rem] rounded-md w-full outline-none focus:outline-none border caret-primary-dark text-sm sm:text-base transition ease-linear focus:border-primary-dark font-semibold text-slate-700 ${
					icon ? "px-10" : "px-4"
				}`}
				type={type}
				onChange={onChangeFunc}
				placeholder={placeholder}
				value={value}
				ref={type === "password" ? ref : null}
			/>
			{icon && <Icon iconName={icon} style="absolute left-2 top-1/2 h-6 w-6 text-slate-400 group-focus-within:text-primary-dark transition-none" />}
		</div>
	);
});

export default InputField;
