import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/privateSmallBusinessNetwork.content";

export default function PrivateSmallBusinessNetwork() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Intro {...page.block.intro} />
      <Block {...page.block.consumerVendorAccounts} />
      <Block {...page.block.benefitsForTheConsumer} />
      <Block {...page.block.benefitsForTheSmallBusiness} />
      <Block {...page.block.video} />
    </div>
  );
}
