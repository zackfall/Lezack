import { Roboto } from "next/font/google";
import HomeTemplate from "@components/Templates/Home";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Home() {
	return <HomeTemplate className={`${roboto.className} font-sans`} />;
}
