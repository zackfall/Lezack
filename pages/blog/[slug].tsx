import { getFiles, getPostBySlug } from "lib/utils";
import ReactMarkdown from "react-markdown";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { BlogPostProps } from "lib/types";
import { Post } from "@components/Organisms/Post";

export async function getStaticPaths() {
  const posts = await getFiles("posts");

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug(
    "posts",
    params.slug
  );

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

const BlogPost = (post: BlogPostProps) => {
  if (!post.frontMatter) return <></>;

  if (post.markdownBody.length < 1) return <>Empty</>;

  return (
    <Post post={post}>
      <ReactMarkdown>{post.markdownBody}</ReactMarkdown>
    </Post>
  );
};

export default BlogPost;
