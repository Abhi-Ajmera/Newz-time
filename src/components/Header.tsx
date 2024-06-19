import { SyntheticEvent, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>("");

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log(searchValue);
	};

	return (
		<header className="text-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link
						to="/"
						className="-m-1.5 p-1.5 flex items-center gap-2"
					>
						<img
							className="h-8 w-auto"
							src="./logo.png"
							alt=""
							width={20}
							height={20}
						/>
						Newz Time
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>
				</div>

				<form className="relative hidden lg:flex lg:flex-1 w-[700px] justify-center">
					<label
						htmlFor="search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Search
					</label>
					<input
						className="border-2 border-gray-300 bg-white h-10 pl-5 pr-7 rounded-lg text-sm focus:outline-none w-full text-black"
						type="search"
						name="search"
						placeholder="Search"
						onChange={(e) => setSearchValue(e.target.value)}
						value={searchValue}
					/>
					<button
						className="absolute right-0 top-[30%] translate-x-1/2 mr-4"
						onClick={handleSubmit}
					>
						<MagnifyingGlassIcon className="w-4 h-4 text-black" />
					</button>
				</form>

				<PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:flex-1 justify-end">
					<Link
						to="/"
						className="text-sm font-semibold leading-6"
					>
						Wishlist
					</Link>
					<Link
						to="/"
						className="text-sm font-semibold leading-6"
					>
						Contact Us
					</Link>
				</PopoverGroup>
			</nav>

			{/* Mobile Menu */}
			<Dialog
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto text-white bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link
							to="/"
							className="-m-1.5 p-1.5"
						>
							<img
								className="h-8 w-auto"
								src="./logo.png"
								alt=""
								width={20}
								height={20}
							/>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Link
									to="/"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
								>
									Wishlist
								</Link>
								<Link
									to="/"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-500"
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
