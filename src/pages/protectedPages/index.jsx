import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
	const user = true;
	const location = useLocation();

	return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
