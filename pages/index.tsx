import Layout from "@components/Layouts/GeneralLayout";
import Card from "@components/Molecules/Card";
import Header from "@components/Organisms/Header";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <article className="my-10 flex-grow">
        <Header />
        <div className="flex justify-around gap-10 mx-10 flex-col 2xl:flex-row">
          <Card name="Leo" imgSrc="/assets/deku.png" actualKin="Izuku" color="green-700">
            Leo is a trans boy, he is very kind and affectionate and although he
            seems serious at times, he actually has a very good sense of humor, he
            makes me laugh a lot and shows me very interesting things. He is very
            smart and always thinks before acting. He also thinks a lot about the
            situation and the right decisions that he should make.
          </Card>
          <Card name="Zack" imgSrc="/assets/bakugo.png" actualKin="Katsuki" color="orange-800">
            I am myself haha. I am Leo's boyfriend and I don't have nothing
            special to say about me, just that I love Leo so much that I would
            do whatever I have to do for him, so he can be happy and comfortable
            with me. If my little nerd wants to, I would like him to tell me what I
            should put here.
          </Card>
        </div>
      </article>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Home;
