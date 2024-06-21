import axios from "axios";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import { useEffect, useState } from "react";

const Home = () => {
	const [data, setData] = useState<dataType | null>(null);
	const cat = "";
	const searchQuery = "";
	const fetchData = () => {
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&q=${searchQuery}&apiKey=${
					import.meta.env.VITE_NEWS_API_KEY
				}`
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	};
	useEffect(() => fetchData, []);
	console.log(data);

	return (
		<>
			<h1 className="text-5xl text-center mb-8">Latest News</h1>
			<div className="flex items-center gap-4 mb-8 mx-8 justify-end">
				<p className="text-lg">Select Category</p>
				<Dropdown />
			</div>
			<div className="flex flex-wrap gap-8 justify-evenly">
				{data?.articles &&
					data.articles.map((article) => (
						<Card
							image={article.urlToImage}
							title={article.title}
							desc={article.description}
						/>
					))}
				{/* <Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card /> */}
			</div>
		</>
	);
};
export default Home;
