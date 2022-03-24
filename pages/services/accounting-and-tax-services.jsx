import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/common/Section";

import page from "public/content/en_US/Page/Services/accountingAndTaxServices.content";

export default function AccountingAndTaxServices() {
  return (
    <>
      <div className={page.slug}>
        <Head {...page} />

        <Hero {...page.hero} />

        <Section {...page.block.intro} />

        <Section {...page.block.scalingYourBusiness} />

        <Section {...page.block.taxation} />

        <Section {...page.block.accessToFunding} />

        <Section {...page.block.video} />
      </div>
    </>
  );
}
