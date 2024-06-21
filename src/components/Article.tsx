const Article = () => {
	return (
		<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 ntialiased">
			<div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
				<article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue format-invert">
					<header className="mb-4 lg:mb-6 not-format">
						<address className="flex items-center mb-6 not-italic">
							<div className="inline-flex items-center mr-3 text-sm text-white">
								<div>
									<a
										href="#"
										rel="author"
										className="text-xl font-bold text-white"
									>
										By Jese Leos
									</a>
									<p className="text-base text-gray-400">Graphic Designer</p>
								</div>
							</div>
						</address>
						<h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
							Best practices for successful prototypes
						</h1>
					</header>
					<figure className="text-center flex flex-col justify-center">
						<img
							src="/no-image.jpg"
							alt=""
						/>
						<figcaption>Digital art by Anonymous</figcaption>
					</figure>
					<p className="lead">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque temporibus quasi nostrum aspernatur
						tempore. Dolore laudantium ex sequi necessitatibus esse quod officia aspernatur eveniet!.
					</p>
					<p>
						Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can
						think things through before committing to an actual design project.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eius nihil officia praesentium ab sapiente
						libero ipsum reiciendis ad alias. Optio laudantium dolores consequuntur voluptates suscipit consequatur
						assumenda quae pariatur beatae incidunt eum repudiandae magni deserunt expedita delectus dolore, qui est?
						Cupiditate officiis repudiandae aut architecto molestiae esse consequatur earum!
					</p>

					<p>
						It also includes a JavaScript file that enables interactive components, such as modals, dropdowns, and
						datepickers which you can optionally include into your project via CDN or NPM.
					</p>

					<h2>When does design come in handy?</h2>
					<p>
						While it might seem like extra work at a first glance, here are some key moments in which prototyping will
						come in handy:
					</p>
				</article>
			</div>
		</main>
	);
};
export default Article;
