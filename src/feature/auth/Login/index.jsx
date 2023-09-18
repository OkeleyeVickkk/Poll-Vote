import PasscodeComponent from "../passcode";
import LoginComponent from "./login";

function index() {
	return (
		<main>
			<div className="min-h-screen">
				<div className="h-full xl:p-1 grid grid-cols-12 min-h-screen bg-primary-dark xl:bg-transparent md:fixed w-full">
					<section className="lg:col-span-4 col-span-full text-white bg-primary-dark rounded-md flex items-center justify-center">
						<PasscodeComponent />
					</section>
					<section className="bg-white col-span-full lg:col-span-8 pb-16 py-10 flex items-center justify-center overflow-y-auto rounded-t-[2rem] xl:rounded-none">
						<LoginComponent />
					</section>
				</div>
			</div>
		</main>
	);
}

export default index;
