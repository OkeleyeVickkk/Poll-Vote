import React from "react";
import "../css/preloader.css";

const Preloader = () => {
	return (
		<React.Fragment>
			{/* <div class="three-body">
				<div class="three-body__dot"></div>
				<div class="three-body__dot"></div>
				<div class="three-body__dot"></div>
			</div> */}
			<div className="follow-the-leader-line">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</React.Fragment>
	);
};

export default Preloader;
