import React from "react";
import "../css/fontsList.css";
import { Button } from "@mui/material";

const FontLists = [
	{ font: "Syne" },
	{ font: "Georgia" },
	{ font: "Rubik" },
	{ font: "Mulish" },
	{ font: "IBMPlexSans" },
	{ font: "Montserrat" },
	{ font: "Stolzl" },
	{ font: "Söhne" },
	{ font: "Nunito Sans" },
	{ font: "Ubuntu" },
	{ font: "Lora" },
	{ font: "Quicksand" },
];

const FontsListDropdown = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col items-start">
				{FontLists.map(({ font }, fontIndex) => {
					return (
						<Button variant="outline" className="block text-[.8rem] leading-2 capitalize" key={fontIndex} style={{ fontFamily: font }}>
							{font}
						</Button>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default FontsListDropdown;
