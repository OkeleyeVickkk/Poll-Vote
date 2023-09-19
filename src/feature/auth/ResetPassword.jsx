import InputField from "../../components/InputField";

export default function ResetPassword() {
	return (
		<div className="min-h-screen w-full flex items-center justify-center relative px-3">
			<div className="absolute bg-primary w-80 h-80 rounded-full -z-[1] left-0 top-0 md:-translate-y-1/4 md:-translate-x-1/4 -translate-y-1/2 -translate-x-1/2 scale-125 "></div>
			<div className="w-full mx-auto max-w-md">
				<div className="mb-8 flex items-start flex-col gap-y-4">
					<h1 className="text-4xl font-extrabold">Forgot Password</h1>
					<span className="text-sm sm:text-base text-slate-500">Enter them email address associated with your account</span>
				</div>
				<form action="" className="flex flex-col gap-y-6">
					<InputField type="email" placeholder="Enter registered email address" icon="iconamoon:email-duotone" />
					<div>
						<button type="button" className="bg-primary w-full text-sm sm:text-base rounded-md py-3 font-semibold text-white hover:bg-primary-dark">
							Reset
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
