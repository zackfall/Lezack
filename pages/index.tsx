import Layout from "@components/Layouts/GeneralLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { Roboto } from "next/font/google";
import HomeTemplate from "@components/Templates/Home";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-roboto",
});

const Home: NextPageWithLayout = () => {
	return <HomeTemplate />;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout className={`${roboto.variable} font-sans`}>{page}</Layout>;
};

export default Home;
