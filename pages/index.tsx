import { Roboto } from "next/font/google";
import HomeTemplate from "@components/Templates/Home";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function Home() {
	return <HomeTemplate className={`${roboto.className} font-sans`} />;
}
