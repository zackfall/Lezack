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
      <div className="relative border-gray-900 rounded-lg border-2">
        <Image
          className="blur-[2px] sm:blur-sm h-full w-full"
          src={post.frontMatter.image}
          alt="Prueba por ahora"
          fill={false}
        />
        <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 w-full h-28 border-2 border-black rounded-b-lg sm:h-48 lg:h-60 xl:h-80 2xl:h-96">
          <BlogPost
            className="relative top-1/4 lg:top-[40%] w-64 left-9 sm:w-2/3 lg:w-[70%] trunc-smaller"
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
