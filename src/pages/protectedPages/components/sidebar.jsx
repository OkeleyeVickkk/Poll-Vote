import React from "react";
import { AnchorNavLink } from "../../../components/AnchorLink";
import Icon from "../../../components/Icon";

export default function NavSideBar() {
	return (
		<nav className="flex flex-col items-start p-4">
			{links.map(({ linkName, path }, index) => {
				return (
					<React.Fragment key={index}>
						<AnchorNavLink
							href={`${path}`}
							style={({ isActive }) => `flex items-center p-2 rounded-md w-full capitalize py-2 ${isActive ? "bg-slate-100" : ""} `}>
							{Icon && <Icon />}
							<span>{linkName}</span>
						</AnchorNavLink>
					</React.Fragment>
				);
			})}
		</nav>
	);
}

const links = [
	{
		linkName: "Home",
		icon: "",
		path: "",
	},
	{
		linkName: "analytics",
		path: "analytics",
		icon: "",
	},
	{
		linkName: "profile",
		path: "profile",
		icon: "",
	},
];
