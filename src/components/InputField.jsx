import { forwardRef } from "react";
import Icon from "./Icon";

const InputField = forwardRef(({ customStyle, label, icon, type, placeholder, value, onChangeFunc }, ref) => {
	return (
		<div>
			{label && (
				<label className="font-bold text-sm text-black/80" htmlFor={label?.toLowerCase()}>
					{label}
				</label>
			)}
			<div className="relative group">
				<input
					className={`border-slate-300 transition ease-linear focus:border-primary-dark font-medium placeholder:font-normal placeholder:text-sm text-slate-700 w-full outline-none focus:outline-none border caret-primary-dark ${
						customStyle ? customStyle : "rounded-md text-sm sm:text-base min-h-[3rem]"
					} ${icon ? "px-11" : "px-4"}`}
					type={type}
					onChange={onChangeFunc}
					placeholder={placeholder}
					value={value}
					id={label?.toLowerCase()}
					required
					ref={type === "password" ? ref : null}
				/>
				{icon && (
					<Icon
						iconName={icon}
						style="absolute left-3 -translate-y-1/2 top-1/2 h-6 w-6 text-slate-400 group-focus-within:text-primary-dark transition-none"
					/>
				)}
			</div>
		</div>
	);
});

export default InputField;
