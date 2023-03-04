import Navbar from "@components/Molecules/Navbar";
import Head from "next/head";

export default function HomeLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <>
      <Head>
        <title>Leo's and Zack's page</title>
        <meta name="description" content="A web page that contains blogs about our dates or our daily life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
