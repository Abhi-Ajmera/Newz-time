import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
import "./index.css";
import Root from "./Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
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
