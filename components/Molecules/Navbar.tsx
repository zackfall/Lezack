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
		<nav className="flex justify-between lg:justify-start flex-col lg:items-center lg:flex-row lg:mx-20 ml-8 my-5">
			<h3 className="text-gray-800 text-xl font-medium">Lezack</h3>
			<ul className="flex lg:ml-16 lg:space-x-14 space-x-3 text-xs">
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
		</nav>
	);
}
