import React from "react";
import GoogleImage from "../../../assets/media/svgs/7123025_logo_google_g_icon.svg";
import InputField from "../../../components/InputField";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
	return (
		<div className="p-4 w-[90%] sm:w-3/4 lg:w-3/5 mx-auto flex flex-col gap-6">
			<div className="v-title">
				<h1 className="text-4xl font-extrabold text-slate-800">Sign up as a host</h1>
			</div>
			<button type="button" className="flex items-center justify-center border py-2 px-3 rounded-md hover:bg-zinc-100/40 w-full">
				<div className="flex items-center gap-2 justify-center">
					<div className="v-image-wrapper">
						<img src={GoogleImage} className="max-w-full h-auto w-8" />
					</div>
					<span className="font-medium text-sm">Sign up with Google</span>
				</div>
			</button>
			<div className="relative w-full border-t">
				<span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-8 font-semibold text-opacity-40 text-slate-900 text-sm lowercase">
					or
				</span>
			</div>
			<div>
				<form action="">
					<div className="flex flex-col gap-y-3">
						<InputField type="text" label="Fullname" />
						<InputField type="text" label="Username" />
						<InputField type="email" label="Email" />
						<InputField type="password" label="Password" />
					</div>
					<div className="text-center space-x-1 mt-10">
						<span className="font-semibold text-slate-600">Have an account?</span>
						<Link to="/login" className="text-primary hover:text-primary-dark font-bold tracking-wide">
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterComponent;