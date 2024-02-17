import { BlogPostProps, BlogProps } from "lib/types";
import Head from "next/head";
import Navbar from "@components/Molecules/Navbar";
import Footer from "@components/Atoms/Footer";
import { Post } from "@components/Molecules/Post";
import { ReactNode } from "react";
import Image from "@components/Atoms/Image";

interface PostTempProps {
  className?: string;
  post: BlogPostProps;
  title: string;
  description: string;
  children: ReactNode;
}

export default function PostTemplate({
  className,
  title,
  description,
  post,
  children,
}: PostTempProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`h-screen flex-col flex gap-y-6 font-sans ${className}`}>
        <Image
          className="image"
          src="/assets/bkdk.svg"
          alt="bkdk"
          fill={false}
        />
        <Navbar />
        <Post className="flex-grow post" post={post}>
          {children}
        </Post>
        {/* <Footer /> */}
      </div>
    </>
  );
}
