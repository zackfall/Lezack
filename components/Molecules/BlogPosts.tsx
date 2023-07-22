import { BlogPostsProps } from "lib/types";
import { BlogPost } from "@components/Atoms/BlogPost";
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
						}
						return (
							<BlogPost key={post.slug} tag={post.frontMatter.tag} tagColor={tagColor} title={post.frontMatter.title} description={post.frontMatter.description} slug={post.slug} />
						);
					})}
			</ul>
		</div>
	);
}
