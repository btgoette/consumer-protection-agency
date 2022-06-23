import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/creditRestoration.content";

export default function CreditRestoration() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
      <section>
        <Block {...page.block.financialLiteracy} />
      </section>
      <section className="py-2 py-lg-5">
        <Block {...page.block.whatIsACreditScore} />
        <Block {...page.block.howCanYourCreditScoreAffectYou} />
        <Block {...page.block.howCanYourCreditScoreAffectYouContinued} />
      </section>
      <section>
        <Block {...page.block.benefitsOfHavingGoodCredit} />
      </section>
    </div>
  );
}
