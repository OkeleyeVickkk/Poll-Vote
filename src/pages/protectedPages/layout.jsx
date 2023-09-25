import { Outlet } from "react-router-dom";
import NavSideBar from "./components/sidebar";

const Layout = () => {
	return (
		<div className="flex min-h-screen">
			<div className="w-[24%]">
				<NavSideBar />
			</div>
			<div className="w-[76%]">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
