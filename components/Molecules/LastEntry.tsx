import Image from "@components/Atoms/Image";
import { BlogPost } from "./BlogPost";
import { BlogPostProps } from "lib/types";

interface LastEntryProps {
  post: BlogPostProps;
  tagColor: string;
}

export default function LastEntry({ post, tagColor }: LastEntryProps) {
  return (
    <section>
      <h3 className="text-xl my-3">Last Post</h3>
      <div>
        <Image
          src={post.frontMatter.image}
          alt="Prueba por ahora"
          fill={false}
          width={700}
          height={7000}
        />
        <BlogPost
          key={post.slug}
          tag={post.frontMatter.tag}
          tagColor={tagColor}
          title={post.frontMatter.title}
          description={post.frontMatter.description}
          slug={post.slug}
        />
      </div>
    </section>
  );
}
