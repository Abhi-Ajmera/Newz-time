import Home from "./Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Root = () => {
	return (
		<>
			<Header />
			<div className="px-6 py-2">
				<Home />
			</div>
			<Footer />
		</>
	);
};
export default Root;
