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
      <div className="relative border-gray-900 border-4 rounded-lg">
        <Image
          className="blur-[2px] sm:blur-sm h-full w-full"
          src={post.frontMatter.image}
          alt="Prueba por ahora"
          fill={false}
        />
        <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 w-full h-16 sm:h-24 lg:h-32 xl:h-36 2xl:h-44">
          <BlogPost
            key={post.slug}
            isLast={true}
            tag={post.frontMatter.tag}
            tagColor={tagColor}
            title={post.frontMatter.title}
            description={post.frontMatter.description}
            slug={post.slug}
          />
        </div>
      </div>
    </section>
  );
}
