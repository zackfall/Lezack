import Footer from "@components/Atoms/Footer";
import Navbar from "@components/Molecules/Navbar";
import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function GeneralLayout(
  { children, title = "Leo's and Zack's page" }: LayoutProps,
) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A web page that contains blogs about our dates or our daily life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex-col flex gap-y-6 font-sans">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
