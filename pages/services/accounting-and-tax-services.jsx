import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/accountingAndTaxServices.content";

export default function AccountingAndTaxServices() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <section>
        <Intro {...page.block.intro} />
      </section>
      <section>
        <Block {...page.block.scalingYourBusiness} />
      </section>
      <section>
        <Block {...page.block.taxation} />
      </section>
      <section>
        <Block {...page.block.accessToFunding} />
      </section>
      {/* <Block {...page.block.video} /> */}
    </div>
  );
}
