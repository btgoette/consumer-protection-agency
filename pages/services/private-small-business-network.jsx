import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from 'components/common/Section'

import page from "public/content/en_US/Page/Services/privateSmallBusinessNetwork.content";

export default function PrivateSmallBusinessNetwork() {
  return (
    <>
      <div className={page.slug}>
        
        <Head {...page} />

        <Hero {...page.hero} />

        <Section {...page.block.intro} />

        <Section {...page.block.consumerVendorAccounts} />

        <Section {...page.block.benefitsForTheConsumer} />

        <Section {...page.block.benefitsForTheSmallBusiness} />
        
        <Section {...page.block.video} />

      </div>
    </>
  );
}
