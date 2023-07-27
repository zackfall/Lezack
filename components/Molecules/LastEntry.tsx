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
      <h3 className="text-xl my-5">Last Post</h3>
      <div className="relative w-2/3 m-auto border-gray-900 rounded-lg border-2">
        <Image
          className="blur-[2px] sm:blur-sm w-full"
          src={post.frontMatter.image}
          alt="Prueba por ahora"
          fill={false}
        />
        <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 w-full h-28 border-2 border-black rounded-b-lg sm:h-36 lg:h-56 xl:h-64 2xl:h-80">
          <BlogPost
            className="relative top-1/4 lg:top-[30%] 2xl:top-[35%] w-40 left-6 sm:w-10/12 lg:w-[85%] trunc-smaller"
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
