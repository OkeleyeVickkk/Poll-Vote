import React from "react";
import "../css/preloader.css";

const Preloader = () => {
	return (
		<React.Fragment>
			<div className="grid place-content-center items-center h-full">
				<div className="flex flex-col gap-y-8 p-12 items-center">
					<div class="three-body mr-4">
						<div class="three-body__dot"></div>
						<div class="three-body__dot"></div>
						<div class="three-body__dot"></div>
					</div>
					<span className="text-lg font-semibold">Loading ...</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Preloader;
