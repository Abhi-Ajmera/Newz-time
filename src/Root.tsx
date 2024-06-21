import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import axios from "axios";
// import { useEffect } from "react";

const Root = () => {
	// const cat = "";
	// const searchQuery = "";
	// const fetchData = () => {
	// 	axios
	// .get(
	// 	`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&q=${searchQuery}&apiKey=${
	// 		import.meta.env.VITE_NEWS_API_KEY
	// 	}`
	// )
	// .then((res) => setData(res.data))
	// .catch((err) => console.log(err));
	// };
	// useEffect(() => fetchData, []);
	return (
		<>
			<Header />
			<div className="px-6 py-2">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
export default Root;
