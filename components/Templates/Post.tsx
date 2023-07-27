import { BlogPostProps, BlogProps } from "lib/types";
import Head from "next/head";
import Navbar from "@components/Molecules/Navbar";
import Footer from "@components/Atoms/Footer";
import { Post } from "@components/Organisms/Post";
import { ReactNode } from "react";

interface PostTempProps {
  className?: string;
  post: BlogPostProps;
  title: string;
  children: ReactNode;
}

export default function PostTemplate({
  className,
  title,
  post,
  children,
}: PostTempProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`h-screen flex-col flex gap-y-6 font-sans ${className}`}>
        <Navbar />
        <Post className="flex-grow" post={post}>
          {children}
        </Post>
        <Footer />
      </div>
    </>
  );
}
