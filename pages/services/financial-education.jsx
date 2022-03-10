import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from 'components/common/Section'

import page from "public/content/en_US/Page/Services/financialEducation.content";

export default function FinancialEducation() {
  return (
    <>
      <div className={page.slug}>

        <Head {...page} />

        <Hero {...page.hero} />

        <Section {...page.block.intro} />
        
        <Section {...page.block.video} />

      </div>
    </>
  );
}
