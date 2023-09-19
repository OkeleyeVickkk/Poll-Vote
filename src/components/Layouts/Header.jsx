import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="flex items-center justify-between p-4 px-2">
			<div className="">
				<Link to="">Logo</Link>
			</div>
			<div className="flex items-center gap-3">
				<Link to="login" className="px-5">
					Log In
				</Link>
				<Link to="register" className="font-bold shadow-cat hover:shadow-cat bg-primary hover:bg-primary-dark text-white py-3 px-8">
					Sign up
				</Link>
			</div>
		</header>
	);
};

export default Header;
