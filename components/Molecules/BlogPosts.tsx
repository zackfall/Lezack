import { BlogPostsProps } from "lib/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface CBlogPostsProps extends BlogPostsProps {
	className?: string;
}

export default function BlogPosts({ posts, className }: CBlogPostsProps) {

	return (
		<div className={`${className} w-9/12 self-center`}>
			<h3 className="text-xl my-3">Recent Blogs</h3>
			{!posts && <div>No posts!</div>}
			<ul>
				{posts
					?.sort(
						(a, b) =>
							new Date(b.frontMatter.publishedDate).getTime() -
							new Date(a.frontMatter.publishedDate).getTime(),
					)
					.map((post) => {
						let tagColor = "";
						switch (post.frontMatter.tag) {
							case "Christmas":
								tagColor = "text-red-500";
								break;
							case "New Year":
								tagColor = "text-amber-600";
								break;
							case "Anniversary":
								tagColor = "text-indigo-700";
								break;
							case "Date":
								tagColor = "text-teal-500";
								break;
							case "Birthday":
								tagColor = "text-yellow-400"
								break;
							case "Prueba":
								tagColor = "text-green-700";
								break;
						};
						return (
							<article key={post.slug}>
								<p className={`text-sm ${tagColor}`}><FontAwesomeIcon className="text-sm mr-1" icon={faCircle} /> {post.frontMatter.tag}</p>
								<Link href={`/blog/${post.slug}`}>
									{post.frontMatter.title}
								</Link>
								<p className="text-neutral-400 text-sm">{post.frontMatter.description}</p>
							</article>
						);
					})}
			</ul>
		</div>
	);
}
