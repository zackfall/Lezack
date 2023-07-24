import { BlogPostsProps, BlogPostProps } from "lib/types";
import { BlogPost } from "@components/Molecules/BlogPost";
import Image from "@components/Atoms/Image";
import { Lateef } from "next/font/google";
import LastEntry from "@components/Molecules/LastEntry";

interface CBlogPostsProps extends BlogPostsProps {
  className?: string;
}

function getTagColor(post: BlogPostProps): string {
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
      tagColor = "text-yellow-400";
      break;
    case "Prueba":
      tagColor = "text-green-700";
      break;
  }
  return tagColor;
}

export default function BlogPosts({ posts, className }: CBlogPostsProps) {
  let last_entry = posts ? posts[0] : null;
  let code = <></>;
  if (last_entry !== null) {
    let tagColor = getTagColor(last_entry);
    code = <LastEntry post={last_entry} tagColor={tagColor} />;
  } else {
    code = <></>;
  }

  return (
    <div className={`${className} w-9/12 self-center`}>
      {code}
      <section>
        <h3 className="text-xl my-3">Recent Blogs</h3>
        {!posts && <div>No posts!</div>}
        <ul>
          {posts
            ?.sort(
              (a, b) =>
                new Date(b.frontMatter.publishedDate).getTime() -
                new Date(a.frontMatter.publishedDate).getTime()
            )
            .map((post) => {
              let tagColor = getTagColor(post);
              return (
                <li key={post.slug}>
                  <BlogPost
                    isLast={false}
                    tag={post.frontMatter.tag}
                    tagColor={tagColor}
                    title={post.frontMatter.title}
                    description={post.frontMatter.description}
                    slug={post.slug}
                  />
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}
