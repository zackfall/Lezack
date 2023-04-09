import { BlogPostsProps } from "lib/types";
import Link from "next/link";

interface CBlogPostsProps extends BlogPostsProps {
	className?: string;
}

export default function BlogPosts({ posts, className }: CBlogPostsProps) {
	return (
		<div className={`${className}`}>
			{!posts && <div>No posts!</div>}
			<ul>
				{posts
					?.sort(
						(a, b) =>
							new Date(b.frontMatter.publishedDate).getTime() -
							new Date(a.frontMatter.publishedDate).getTime(),
					)
					.map((post) => {
						return (
							<article key={post.slug}>
								<Link href={`/blog/${post.slug}`}>
									{post.frontMatter.title}
								</Link>{" "}
								- {post.frontMatter.description}
								<p>[ {post.frontMatter.tags.join(", ")} ]</p>
								<p>{post.slug}</p>
							</article>
						);
					})}
			</ul>
		</div>
	);
}
