import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
import "./index.css";
import Root from "./Root";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Article from "./components/Article";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/article",
				element: <Article />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="min-h-screen bg-gray-800 text-white">
			{/* <Provider store={store}> */}
			<RouterProvider router={router} />
			{/* </Provider> */}
		</div>
	</React.StrictMode>
);
