import Head from "components/common/Head";
import Hero from "components/common/Hero";

import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/home.content";

export default function Home() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <section>
        <Intro {...page.block.intro} />
      </section>
      <Block {...page.block.video} />
    </div>
  );
}
