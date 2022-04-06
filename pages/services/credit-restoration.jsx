import Head from "components/common/Head";
import Hero from "components/common/Hero";

import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/creditRestoration.content";

export default function CreditRestoration() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Intro {...page.block.intro} />
      <Block {...page.block.whatIsACreditScore} />
      <Block {...page.block.howCanYourCreditScoreAffectYou} />
      <Block {...page.block.benefitsForTheConsumer} />
      <Block {...page.block.benefitsOfHavingGoodCredit} />
      <Block {...page.block.video} />
    </div>
  );
}
