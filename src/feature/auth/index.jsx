import TransitionWrapper from "../../components/Layouts/wrapper";
import PasscodeComponent from "./passcode";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
	return (
		<TransitionWrapper>
			<main>
				<div className="min-h-screen">
					<div className="h-full xl:p-1 grid grid-cols-12 min-h-screen bg-primary-dark xl:bg-transparent md:fixed w-full">
						<section className="lg:col-span-4 col-span-full text-white bg-primary-dark rounded-md flex items-center justify-center">
							<PasscodeComponent />
						</section>
						<Outlet />
					</div>
				</div>
			</main>
		</TransitionWrapper>
	);
}
