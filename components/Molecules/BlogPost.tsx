import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Topic from "@components/Atoms/Topic";

interface BlogPostProps {
  className?: string;
  isLast: boolean;
  tag: string;
  tagColor: string;
  slug: string;
  title: string;
  description: string;
}

export function BlogPost({
  className,
  isLast,
  tag,
  tagColor,
  slug,
  title,
  description,
}: BlogPostProps) {
  if (isLast) {
    return (
      <article className={className}>
        <Topic className={`text-sm ${tagColor}`}>{tag}</Topic>
        <Link href={`/blog/${slug}`}>{title}</Link>
        <p className="text-neutral-400 text-sm ">{description}</p>
      </article>
    );
  }
  return (
    <article className={className}>
        <Topic className={`text-sm ${tagColor}`}>{tag}</Topic>
      <Link href={`/blog/${slug}`}>{title}</Link>
      <p className="text-neutral-400 text-sm">{description}</p>
    </article>
  );
}
