import React from "react";
import PasscodeComponent from "./passcode";
import RegisterComponent from "./register";

const Register = () => {
	return (
		<main>
			<div className="min-h-screen">
				<div className="h-full md:p-1 grid grid-cols-12 min-h-screen bg-primary-dark md:bg-transparent md:fixed w-full">
					<section className="md:col-span-4 col-span-full text-white bg-primary-dark rounded-md flex items-center justify-center">
						<PasscodeComponent />
					</section>
					<section className="bg-white col-span-full md:col-span-8 py-8 flex items-center justify-center overflow-y-auto rounded-t-[3rem] lg:rounded-none">
						<RegisterComponent />
					</section>
				</div>
			</div>
		</main>
	);
};

export default Register;
