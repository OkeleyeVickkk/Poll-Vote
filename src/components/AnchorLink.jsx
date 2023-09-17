import React from "react";
import { Link } from "react-router-dom";

export default function AnchorLink({ children, href, style }) {
	return (
		<Link to={href} className={style ? style : ""}>
			{children}
		</Link>
	);
}
