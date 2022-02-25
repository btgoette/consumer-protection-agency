import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Intro from "components/common/Intro"
import TwoColumnGridImage from "components/common/TwoColumnGridImage"
import List from "components/common/List"

import page from "public/content/en_US/Page/privateSmallBusinessNetwork.content";

export default function PrivateSmallBusinessNetwork() {
  return (
    <>
      <div className={page.slug}>
        <Head {...page} />

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

        <TwoColumnGridImage {...page.block.consumerVendorAccounts} />

        <List {...page.block.benefitsForTheConsumer} />

        <List {...page.block.benefitsForTheSmallBusiness} />
      </div>
    </>
  );
}
