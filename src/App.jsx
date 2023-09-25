import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import LandingPage from "./pages";

//auth
import RegisterComponent from "./feature/auth/register";
import AuthLayout from "./feature/auth";
import LoginComponent from "./feature/auth/login";
import ResetPassword from "./feature/auth/resetPassword";

//ProtectedPages
import Layout from "./pages/protectedPages/Layout";
import Dashboard from "./pages/protectedPages/pages/dashboard";
import Profile from "./pages/protectedPages/pages/profile";
import Analytics from "./pages/protectedPages/pages/analytics";

// 404 page
import Error from "./pages/error/Error.jsx";
import ProtectedPage from "./pages/protectedPages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index Component={LandingPage} />
			<Route Component={AuthLayout}>
				<Route path="register" Component={RegisterComponent} />
				<Route path="login" Component={LoginComponent} />
			</Route>
			<Route path="/resetpassword" Component={ResetPassword} />
			<Route Component={ProtectedPage}>
				<Route path="/dashboard" Component={Layout}>
					<Route path="analytics" Component={Analytics} />
					<Route path="profile" Component={Profile} />
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
