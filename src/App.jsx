import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// route layouts

// pages
import * as LandingPage from "./pages";

//auth pages
import Login from "./feature/auth/Login";

// 404 page
import Error from "./pages/error/Error.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" index Component={LandingPage.default} />
			<Route path="login" Component={Login} />
			<Route path="*" Component={Error} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
