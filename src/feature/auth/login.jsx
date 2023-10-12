import GoogleImage from "../../assets/media/svgs/7123025_logo_google_g_icon.svg";
import InputField from "../../components/InputField";
import AnchorLink from "../../components/AnchorLink";
import Icon from "../../components/Icon";
import { useRef } from "react";
import { useAuthStore } from "../store/appStore";
import TransitionWrapper from "../../components/Layouts/wrapper";
import { getPath } from "../../pages";

export default function LoginComponent() {
	const passwordRef = useRef();
	const { passwordvisibility, togglePass } = useAuthStore((state) => ({
		passwordvisibility: state.isVisible,
		togglePass: state.togglePassword,
	}));

	function togglePassword() {
		togglePass();
		const ref = passwordRef.current;
		if (ref && ref.type === "password") {
			return (ref.type = "text");
		}
		return ref && (ref.type = "password");
	}

	return (
		<TransitionWrapper className="bg-white col-span-full lg:col-span-8 py-16 md:pt-72 lg:pt-10 flex items-center justify-center overflow-y-auto rounded-t-[2rem] lg:rounded-t-none">
			<div className="md:px-4 md:mb-32 lg:mb-0 md:mt-[6rem] w-[90%] sm:w-3/4 lg:w-3/5 mx-auto flex flex-col gap-6">
				<div className="v-title">
					<h1 className="text-4xl font-extrabold text-slate-800">
						Log in to your account<span className="text-primary">.</span>
					</h1>
				</div>
				<div className="space-x-1">
					<span className="font-semibold text-slate-600">Don't have an account?</span>
					<AnchorLink href="/register" style="text-primary hover:text-primary-dark font-bold tracking-wide">
						Create one
					</AnchorLink>
				</div>
				<button type="button" className="flex items-center justify-center border py-2 px-3 rounded-md bg-secondary text-slate-100 w-full">
					<div className="flex items-center gap-2 justify-center">
						<div className="v-image-wrapper">
							<img src={GoogleImage} alt={getPath(GoogleImage)} className="max-w-full h-auto w-8" />
						</div>
						<span className="font-medium text-sm">Log in with Google</span>
					</div>
				</button>
				<div className="relative w-full border-t">
					<span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-8 font-semibold text-opacity-40 text-slate-900 text-sm lowercase">
						or
					</span>
				</div>
				<>
					<form action="">
						<div className="flex flex-col gap-y-3">
							<InputField type="email" label="Email" icon="solar:user-bold-duotone" />
							<div className="relative">
								<InputField type="password" label="Password" icon="solar:lock-password-unlocked-bold-duotone" ref={passwordRef} />
								<button
									onClick={togglePassword}
									type="button"
									className="absolute right-3
								 top-1/2 translate-1/2 text-slate-400 transition-[color] ease-linear duration-75 hover:text-primary">
									<Icon
										iconName={`${passwordvisibility ? "iconamoon:eye-off-duotone" : "solar:eye-bold-duotone"}`}
										style="h-6 w-6 group-focus-within:text-primary-dark !transition-none"
									/>
								</button>
							</div>
							<div className="mt-4 flex flex-col items-center gap-y-5">
								<button
									type="submit"
									className="w-full rounded-md py-3 tracking-normal font-semibold min-h-[3.2rem] text-white bg-primary hover:bg-primary-dark">
									Login
								</button>
								<div className="space-x-1">
									<span>Don't remember my password,</span>
									<AnchorLink href="/resetpassword" style="text-primary font-semibold underline">
										help
									</AnchorLink>
								</div>
							</div>
						</div>
					</form>
				</>
			</div>
		</TransitionWrapper>
	);
}
