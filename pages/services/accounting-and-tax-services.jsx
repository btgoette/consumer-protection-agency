import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/accountingAndTaxServices.content";

export default function AccountingAndTaxServices() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
      <section>
        <Block {...page.block.howDoIKeepWhatIEarn} />
      </section>
      <section className="py-lg-5">
        <Block {...page.block.scalingYourBusiness} />
        <Block {...page.block.taxation} />
        <Block {...page.block.accessToFunding} />
      </section>
    </div>
  );
}
