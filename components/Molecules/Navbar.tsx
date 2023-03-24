import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const hamburgerClass =
		"h-1 w-6 my-1 rounded-full bg-orange-800 transition ease transform duration-300";
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		console.log(isOpen);
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	return (
		<nav className="flex justify-between lg:justify-start items-center lg:mx-20 mx-10 my-5">
			<h3 className="text-gray-800 text-xl font-medium">Lezack</h3>
			<ul className="lg:flex lg:ml-16 space-x-14 justify-end hidden">
				<li>
					<Link
						className="text-green-700 hover:text-orange-800 duration-200 text-lg"
						href="/"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className="text-green-700 hover:text-orange-800 duration-200 text-lg"
						href="/blog"
					>
						Blog
					</Link>
				</li>
			</ul>
			<div className="relative lg:hidden h-12 w-12">
				<button
					className="flex flex-col absolute border-2 border-orange-800 rounded justify-center items-center group w-full h-full"
					onClick={handleClick}
				>
					<div
						className={`${hamburgerClass} ${
							isOpen
								? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${hamburgerClass} ${
							isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${hamburgerClass} ${
							isOpen
								? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
				</button>
				<div
					className={`w-7 overflow-hidden rotate-180 absolute top-12 left-2.5 ${
						isOpen ? "inline-block" : "hidden"
					}`}
				>
					<div className="h-5 w-5 bg-orange-800 rotate-45 origin-bottom-left" />
				</div>
				<div
					className={`w-52 rounded-lg bg-white h-32 absolute border-2 mx-0 my-auto -left-40 border-orange-800 top-16 ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className="flex flex-col justify-around w-full h-full justify-items-center">
						<li className="pl-5 py-4.5">
							<Link className="text-green-700 text-lg" href="/">
								Home
							</Link>
						</li>
						<li className="pl-5 py-4.5">
							<Link className="text-green-700 text-lg" href="/blog">
								Blog
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
