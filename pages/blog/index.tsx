import { Roboto } from "next/font/google";
import { getAllPostsWithFrontMatter } from "lib/utils";
import { BlogProps } from "lib/types";
import BlogTemplate from "@components/Templates/Blog";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Blog({ posts, title, description }: BlogProps) {
	return (
		<>
			<BlogTemplate
				className={`${roboto.variable} font-sans`}
				posts={posts}
				title={title}
				description={description}
			/>
		</>
	);
}

export async function getStaticProps() {
	const posts = await getAllPostsWithFrontMatter("posts");

	return {
		props: {
			posts,
			title: "Blog",
			description: "Post about my beloved Leo",
		},
	};
}
