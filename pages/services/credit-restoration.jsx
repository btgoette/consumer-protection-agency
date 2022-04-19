import Head from "components/common/Head";
import Hero from "components/common/Hero";

import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/creditRestoration.content";

export default function CreditRestoration() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
      <section>
        <Block {...page.block.whatIsACreditScore} />
      </section>
      <section>
        <Block {...page.block.howCanYourCreditScoreAffectYou} />
      </section>
      <section>
        <Block {...page.block.benefitsForTheConsumer} />
      </section>
      <section>
        <Block {...page.block.benefitsOfHavingGoodCredit} />
      </section>
      {/* <Block {...page.block.video} /> */}
    </div>
  );
}
