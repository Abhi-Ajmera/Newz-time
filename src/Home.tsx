import Card from "./components/Card";

const Home = () => {
	return (
		<>
			<h1 className="text-5xl text-center mb-8">Latest News</h1>
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
