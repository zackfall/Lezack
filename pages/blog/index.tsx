import { Roboto } from "next/font/google";
import BlogPosts from "@components/Molecules/BlogPosts";
import { getAllPostsWithFrontMatter } from "lib/utils";
import { BlogProps } from "lib/types";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Blog({ posts, title, description }: BlogProps) {
	return (
		<>
			<BlogPosts posts={posts} />
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
