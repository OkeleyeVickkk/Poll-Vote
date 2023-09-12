import Header from "../components/UIComponents/Header";
import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import sparkle from "../assets/media/svgs/sparkles-one.svg";

export default function index() {
	return (
		<div className="max-w-4xl mx-auto">
			<>
				<Header />
			</>
			<>
				<div className="grid grid-cols-12 place-items-center relative">
					<div className="absolute -left-16 -top-20 sm:top-0 scale-[0.3] sm:scale-50">
						<img src={sparkle} alt="" />
					</div>
					<div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 flex flex-col text-center items-center gap-y-6 mt-12 px-2">
						<h1 className="text-4xl sm:text-6xl font-extrabold">
							The easiest way to make your polls <span className="text-ash">fair</span> & <span className="text-ash">transparent.</span> Go with
							<span className="text-primary"> Poll-Vote</span>
						</h1>
						<span className="text-base sm:text-lg font-normal opacity-90">
							Engage your participants with live polls from anywhere around the world
						</span>
						<div>
							<Link
								to=""
								className="group bg-primary hover:bg-primary-dark font-bold text-white shadow-cat hover:shadow-hoverCat py-3 flex items-center gap-3 px-4">
								<Icon iconName="guidance:left-arrow" style="group-hover:scale-0 group-hover:-mr-8 mr-0 scale-100 w-5 h-5" />
								<span className="">Get started for free</span>
								<Icon iconName="guidance:left-arrow" style="group-hover:scale-100 group-hover:mr-0 -mr-8 scale-0 w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>
			</>
		</div>
	);
}
