import ErrorImage from "../../assets/media/image/Page-Not-Found.png";
import AnchorLink from "../../components/AnchorLink";
import GoBack from "../../components/GoBack";

export default function Error() {
	return (
		<div className="min-h-screen grid place-content-center">
			<div className="w-2/4 mx-auto flex flex-col items-center gap-y-8">
				<div className="">
					<img className="img-fluid" src={ErrorImage} alt="" />
				</div>
				<div className="flex flex-col items-center gap-y-4">
					<h3 className="text-xl font-extrabold md:text-4xl text-primary-dark">Page Not Found</h3>
					<div className="flex items-center gap-x-3">
						<GoBack />
						<AnchorLink href="/" style="font-semibold bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md">
							Go Home
						</AnchorLink>
					</div>
				</div>
			</div>
		</div>
	);
}
