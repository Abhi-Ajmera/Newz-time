import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

const Home = () => {
	return (
		<>
			<h1 className="text-5xl text-center mb-8">Latest News</h1>
			<div className="flex items-center gap-4 mb-8 mx-8 justify-end">
				<p className="text-lg">Select Category</p>
				<Dropdown />
			</div>
			<div className="flex flex-wrap gap-8 justify-evenly">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};
export default Home;
