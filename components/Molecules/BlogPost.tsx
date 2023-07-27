import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
        <p className={`text-sm ${tagColor}`}>
          <FontAwesomeIcon className="text-sm mr-1" icon={faCircle} /> {tag}
        </p>
        <Link href={`/blog/${slug}`}>{title}</Link>
        <p className="text-neutral-400 text-sm ">{description}</p>
      </article>
    );
  }
  return (
    <article className={className}>
      <p className={`text-sm ${tagColor}`}>
        <FontAwesomeIcon className="text-sm mr-1" icon={faCircle} /> {tag}
      </p>
      <Link href={`/blog/${slug}`}>{title}</Link>
      <p className="text-neutral-400 text-sm">{description}</p>
    </article>
  );
}
