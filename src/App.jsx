import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import LandingPage from "./pages";

//auth
import ResetPassword from "./feature/auth/ResetPassword";
import Register from "./feature/auth/Register";
import Login from "./feature/auth/Login";

//ProtectedPages
import ProtectedRoute from "./pages/protectedPages";
import Dashboard from "./pages/protectedPages/pages/dashboard";
import Profile from "./pages/protectedPages/pages/profile";
import Analytics from "./pages/protectedPages/pages/analytics";
import Layout from "./pages/protectedPages/layout.jsx";

// 404 page
import Error from "./pages/error/Error.jsx";
// import ProtectedErrorPage from "./pages/error/ProtectedErrorPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" index Component={LandingPage} />
			<Route path="/register" Component={Register} />
			<Route path="/login" Component={Login} />
			<Route path="/resetpassword" Component={ResetPassword} />
			<Route Component={ProtectedRoute}>
				<Route path="/dashboard" element={<Layout />}>
					<Route path="index" element={<Dashboard />} />
					<Route path="analytics" element={<Analytics />} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Route>
			<Route path="*" Component={Error} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
