import Header from "../components/Layouts/Header";
import { Link } from "react-router-dom";
import Icon, { Loader } from "../components/Icon";
import sparkle from "../assets/media/svgs/sparkles-one.svg";
import Scribble from "../assets/media/svgs/scribbble.svg";
import hand1 from "../assets/media/image/Thumbs_Up_or_Down_R-Angle_A4.png";
import TransitionWrapper from "../components/Layouts/wrapper";

export const getPath = (image) => {
	return `poll-vote-${image.split("/" || "\\").at(-1)}`;
};

export default function LandingPage() {
	return (
		<TransitionWrapper className="max-w-4xl mx-auto min-h-screen">
			<>
				<Header />
			</>
			<>
				{/* <Loader /> */}
				<div className="grid grid-cols-12 place-items-center relative">
					<div className="absolute -left-16 -top-20 sm:top-0 scale-[0.3] sm:scale-50">
						<img src={sparkle} alt={getPath(sparkle)} className="img-fluid" />
					</div>
					<div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 flex flex-col text-center items-center gap-y-6 px-2 relative py-14 sm:py-8 overflow-hidden sm:overflow-visible">
						<div className="v-hands absolute z-[-1] w-32 md:w-44 right-0 bottom-1/4 md:translate-x-32 hidden sm:block">
							<img src={hand1} alt={getPath(hand1)} className="img-fluid" />
						</div>
						<div></div>
						<h1 className="text-4xl sm:text-6xl font-extrabold">
							The easiest way to make your polls <span className="text-ash">fair</span> & <span className="text-ash">transparent.</span> Go with
							<br />
							<span className="text-primary">Poll-Vote</span>
						</h1>
						<div className="relative">
							<span className="text-base sm:text-lg font-normal text-opacity-90 pt-2 relative">
								Engage your participants with live polls from anywhere around the world
							</span>
							<div className="absolute sm:scale-[0.6] scale-[0.3] -top-8 -right-24 sm:-right-4 -z-[1]">
								<img src={Scribble} alt={getPath(Scribble)} className="img-fluid" />
							</div>
						</div>
						<div>
							<Link
								to="register"
								className="group bg-primary hover:bg-primary-dark font-bold text-white shadow-cat hover:shadow-hoverCat py-3 flex items-center gap-3 px-4">
								<Icon iconName="guidance:left-arrow" style="group-hover:scale-0 group-hover:-ml-8 ml-0 scale-100 w-5 h-5" />
								<span>Get started for free</span>
								<Icon iconName="guidance:left-arrow" style="group-hover:scale-100 group-hover:mr-0 -mr-8 scale-0 w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>
			</>
		</TransitionWrapper>
	);
}
