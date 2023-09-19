import { Outlet } from "react-router-dom";
import NavSideBar from "./components/sidebar";

export default function Layout() {
	return (
		<div className="flex min-h-screen">
			<div className="w-[24%] border-r border-solid border-slate-600 bg-red-300">
				<NavSideBar />
			</div>
			<div className="w-[76%]">
				<Outlet />
			</div>
		</div>
	);
}
