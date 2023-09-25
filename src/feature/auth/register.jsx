import InputField from "../../components/InputField";
import AnchorLink from "../../components/AnchorLink";
import GoogleImage from "../../assets/media/svgs/7123025_logo_google_g_icon.svg";
import TransitionWrapper from "../../components/Layouts/wrapper";

export default function RegisterComponent() {
	return (
		<TransitionWrapper className="min-h-[80vh] bg-white col-span-full lg:col-span-8 py-16 md:pt-72 lg:pt-32 flex items-center justify-center overflow-y-auto rounded-t-[3rem] lg:rounded-t-none">
			<div className="sm:p-4 w-[90%] sm:w-3/4 md:mt-[4rem] lg:w-3/5 mx-auto flex flex-col gap-6">
				<div className="v-title">
					<h1 className="text-4xl font-extrabold text-slate-800">
						Sign up as a host<span className="text-primary">.</span>
					</h1>
				</div>
				<div className="space-x-1">
					<span className="font-semibold text-slate-600">Already a member?</span>
					<AnchorLink href="/login" style="text-primary hover:text-primary-dark font-bold tracking-wide">
						Login
					</AnchorLink>
				</div>
				<button type="button" className="flex items-center justify-center border py-2 px-3 rounded-md bg-secondary text-slate-100 w-full">
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
						<div className="my-6">
							<button
								type="submit"
								className="w-full rounded-md py-3 tracking-normal font-semibold min-h-[3.2rem] text-white bg-primary hover:bg-primary-dark">
								Create account
							</button>
						</div>
					</form>
				</div>
			</div>
		</TransitionWrapper>
	);
}
