import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();

export async function getFiles(dataType: string) {
	return fs.readdirSync(path.join(root, "pages", "blog", dataType), "utf-8");
}

export async function getPostBySlug(dataType: string, slug: string) {
	const source = fs.readFileSync(
		path.join(root, "pages", "blog", dataType, `${slug}.md`),
		"utf8",
	);

	const { data, content } = matter(source);

	return {
		frontMatter: data,
		markdownBody: content,
	};
}

export async function getAllPostsWithFrontMatter(dataType: string) {
	const files = fs.readdirSync(path.join(root, "pages", "blog", dataType));

	// @ts-ignore
	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(
			path.join(root, "pages", "blog", dataType, postSlug),
			"utf8",
		);
		const { data } = matter(source);

		return [
			{
				frontMatter: data,
				slug: postSlug.replace(".md", ""),
			},
			...allPosts,
		];
	}, []);
}
