import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedPage() {
	const user = false;
	const location = useLocation();

	return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace={true} />;
}
