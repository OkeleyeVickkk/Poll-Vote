import { Link, NavLink } from "react-router-dom";

export default function AnchorLink({ children, href, style }) {
	return (
		<Link to={href} className={style ? style : ""}>
			{children}
		</Link>
	);
}

export function AnchorNavLink({ children, href, style }) {
	return (
		<NavLink to={href} className={style ? style : ""}>
			{children}
		</NavLink>
	);
}
