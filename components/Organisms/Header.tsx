import Image from "@components/Atoms/Image";
import { Sono } from "next/font/google";

const sono = Sono({
	weight: "400",
	subsets: ["latin"],
});

export default function Header() {
	return (
		<header className="mx-12 flex flex-col">
			<h1
				className={`md:text-9xl sm:text-7xl text-5xl self-center mb-10 ${sono.className} font-mono`}
			>
				<span className="text-green-700">ᛁ ᛚᛟᚡ</span>
				<span className="text-orange-800">ᛖ ᚤᛟᚢ</span>
			</h1>
			<section className="mt-5">
				<div className="flex justify-around items-center flex-col lg:flex-row gap-5 lg:gap-0 relative">
					<p className="lg:w-3/6 text-gray-800 text-justify lg:text-left">
						Lezack is a page where Zack can post letters in the form of blogs or
						just normal blogs to show his boyfriend Leo. Blogs don&apos;t need
						to be something special, they can be something trivial that happened
						in the day or whatever, like a diary. These blogs are just for fun
						and because it&apos;s the only way for Zack to show his feelings for
						Leo without being embarrassed by his ugly handwriting or because
						he&apos;s really nervous to give him any real letters.
					</p>
					<Image
						className="h-auto w-auto"
						src="/assets/bkdk.png"
						alt="BakuDeku Image"
						fill={false}
						height={300}
						width={300}
					/>
				</div>
			</section>
		</header>
	);
}
