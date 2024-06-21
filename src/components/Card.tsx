interface propType {
	image: string | null;
	title: string | null;
	desc: string | null;
}
const Card = ({ image, title, desc }: propType) => {
	return (
		<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img
					className="rounded-t-lg w-full h-60 text-center"
					src={image !== null ? image : "/no-image.jpg"}
					alt=""
				/>
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
				</a>
				<p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
					{desc !== null ? desc : "No Description Available"}
				</p>
			</div>
		</div>
	);
};
export default Card;
