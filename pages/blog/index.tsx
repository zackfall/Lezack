import Layout from "@components/Layouts/GeneralLayout";
import { NextPageWithLayout } from "@pages/_app";
import { Roboto } from "next/font/google";
import { ReactElement } from "react";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-roboto",
});

const Blog: NextPageWithLayout = () => {
	return <></>;
};

Blog.getLayout = function getLayout(page: ReactElement) {
	return <Layout className={`${roboto.variable} font-sans`}>{page}</Layout>;
};

export default Blog;
