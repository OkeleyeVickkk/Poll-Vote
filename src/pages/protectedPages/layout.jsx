import { Outlet } from "react-router-dom";
import NavSideBar from "./components/sidebar";

export default function Layout() {
	return (
		<div className="flex min-h-screen">
			<div className="w-[24%] bg-red-300">
				<NavSideBar />
			</div>
			<div className="w-[76%] bg-pink-50">
				<Outlet />
			</div>
		</div>
	);
}
