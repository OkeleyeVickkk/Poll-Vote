import Header from "../components/UIComponents/Header";
import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import sparkle from "../assets/media/svgs/sparkles-one.svg";
import Scribble from "../assets/media/svgs/scribbble.svg";

export default function index() {
	return (
		<div className="max-w-4xl mx-auto">
			<>
				<Header />
			</>
			<>
				<div className="grid grid-cols-12 place-items-center py-14 sm:py-12 relative overflow-hidden">
					<div className="absolute -left-16 -top-20 sm:top-0 scale-[0.3] sm:scale-50">
						<img src={sparkle} alt="" className="img-fluid" />
					</div>
					<div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 flex flex-col text-center items-center gap-y-6 px-2">
						<div></div>
						<h1 className="text-4xl sm:text-6xl font-extrabold">
							The easiest way to make your polls <span className="text-ash">fair</span> & <span className="text-ash">transparent.</span> Go with
							<br />
							<span className="text-primary"> Poll-Vote</span>
						</h1>
						<div className="relative">
							<span className="text-base sm:text-lg bg-white font-normal text-opacity-90 pt-2 relative">
								Engage your participants with live polls from anywhere around the world
							</span>
							<div className="absolute sm:scale-[0.6] scale-[0.3] -top-8 -right-24 sm:-right-4 -z-[1]">
								<img src={Scribble} alt="" className="img-fluid" />
							</div>
						</div>
						<div>
							<Link
								to=""
								className="group bg-primary hover:bg-primary-dark font-bold text-white shadow-cat hover:shadow-hoverCat py-3 flex items-center gap-3 px-4">
								<Icon iconName="guidance:left-arrow" style="group-hover:scale-0 group-hover:-ml-8 ml-0 scale-100 w-5 h-5" />
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
