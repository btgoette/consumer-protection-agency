import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Intro from "components/common/Intro"
import TwoColumnGrid from "components/common/TwoColumnGrid"
import Video from 'components/common/Video'

import page from "public/content/en_US/Page/Services/privateSmallBusinessNetwork.content";

export default function PrivateSmallBusinessNetwork() {
  return (
    <>
      <div className={page.slug}>
        <Head {...page} />

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

        <TwoColumnGrid {...page.block.consumerVendorAccounts} />

        <TwoColumnGrid {...page.block.benefitsForTheConsumer} />

        <TwoColumnGrid {...page.block.benefitsForTheSmallBusiness} />
        
        <Video {...page.block.video} />

      </div>
    </>
  );
}
