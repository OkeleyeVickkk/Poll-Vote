import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import LandingPage from "./pages";

//auth
import Register from "./feature/auth/Register";
import Login from "./feature/auth/Login";

//ProtectedPages

// 404 page
import Error from "./pages/error/Error.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" index Component={LandingPage} />
			<Route path="register" Component={Register} />
			<Route path="login" Component={Login} />
			<Route path="*" Component={Error} />
			<Route path="dashboard"></Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
