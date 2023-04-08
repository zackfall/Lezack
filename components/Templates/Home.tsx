import Footer from "@components/Atoms/Footer";
import Card from "@components/Molecules/Card";
import Navbar from "@components/Molecules/Navbar";
import Header from "@components/Organisms/Header";
import Head from "next/head";

interface HomeTempProps {
	className?: string;
	title?: string;
}

function HomeTemplate({
	className,
	title = "Leo's and Zack's page",
}: HomeTempProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name="description"
					content="A web page that contains blogs about our dates or our daily life"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`h-screen flex-col flex gap-y-6 font-sans ${className}`}>
				<Navbar />
				<article className="my-10 flex-grow">
					<Header />
					<div className="flex justify-around gap-10 mx-10 flex-col 2xl:flex-row">
						<Card
							name="Leo"
							imgSrc="/assets/deku_adventurer.jpeg"
							actualKin="Izuku"
							color="green-700"
						>
							Leo is a really cute boy, he is very kind and affectionate and
							although he seems serious at times, he actually has a very good
							sense of humor, he makes me laugh a lot and shows me very
							interesting things. He is very smart and always thinks before
							acting. He also thinks a lot about the situation and the right
							decisions that he should make.
						</Card>
						<Card
							name="Zack"
							imgSrc="/assets/katsuki_dragon_king.jpeg"
							actualKin="Katsuki"
							color="orange-800"
						>
							I am myself haha. I am Leo&apos;s boyfriend and I don&apos;t have
							nothing special to say about me, just that I love Leo so much that
							I would do whatever I have to do for him, so he can be happy and
							comfortable with me. If my little nerd wants to, I would like him
							to tell me what I should put here.
						</Card>
					</div>
				</article>
				<Footer />
			</div>
		</>
	);
}

export default HomeTemplate;
