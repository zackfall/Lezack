import { BlogPostProps } from "lib/types";
import { ReactNode } from "react";

interface PostProps {
  children: ReactNode;
  className?: string;
  post: BlogPostProps;
}

export function Post({ children, className, post }: PostProps) {
  return <>{children}</>;
}
