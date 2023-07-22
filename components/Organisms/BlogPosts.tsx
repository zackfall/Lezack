import { BlogPostsProps, BlogPostProps } from "lib/types";
import { BlogPost } from "@components/Molecules/BlogPost";
import Image from "@components/Atoms/Image";
import { Lateef } from "next/font/google";

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
    code = (
      <>
        <h3 className="text-xl my-3">Last Post</h3>
        <div>
          <Image
            src={last_entry.frontMatter.image}
            alt="Prueba por ahora"
            fill={false}
            width={700}
            height={7000}
          />
          <BlogPost
            key={last_entry.slug}
            tag={last_entry.frontMatter.tag}
            tagColor={tagColor}
            title={last_entry.frontMatter.title}
            description={last_entry.frontMatter.description}
            slug={last_entry.slug}
          />
        </div>
      </>
    );
  } else {
    code = <></>;
  }

  return (
    <div className={`${className} w-9/12 self-center`}>
      {code}
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
              <>
                <BlogPost
                  key={post.slug}
                  tag={post.frontMatter.tag}
                  tagColor={tagColor}
                  title={post.frontMatter.title}
                  description={post.frontMatter.description}
                  slug={post.slug}
                />
              </>
            );
          })}
      </ul>
    </div>
  );
}
