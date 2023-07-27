export type BlogFrontMatter = {
    title: string,
    description: string,
    publishedDate: string,
    tag: string
    image: string,
    index: number
}

export type BlogPostProps = {
    slug: string,
    siteTitle: string
    frontMatter: BlogFrontMatter,
    markdownBody: string,
    wordCount: number,
    readingTime: string
}

export type BlogPostsProps = {
    posts?: BlogPostProps[];
}

export interface BlogProps extends BlogPostsProps {
    title: string;
    description: string;
}