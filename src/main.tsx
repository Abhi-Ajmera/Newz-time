import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="min-h-screen bg-gray-800 text-white">
			<Header />
			<div className="px-6 py-2">
				<Root />
			</div>
			<Footer />
		</div>
	</React.StrictMode>
);
