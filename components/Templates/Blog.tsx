import { BlogProps } from "lib/types";
import BlogPosts from "@components/Organisms/BlogPosts";
import Head from "next/head";
import Navbar from "@components/Molecules/Navbar";
import Footer from "@components/Atoms/Footer";

interface BlogTempProps extends BlogProps {
  className?: string;
}

export default function BlogTemplate({
  className,
  title,
  posts,
}: BlogTempProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`h-screen flex-col flex gap-y-6 font-sans ${className}`}>
        <Navbar />
        <BlogPosts className="flex-grow" posts={posts} />
        <Footer />
      </div>
    </>
  );
}
