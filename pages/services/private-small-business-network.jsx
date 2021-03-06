import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/privateSmallBusinessNetwork.content";

export default function PrivateSmallBusinessNetwork() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
      <section>
        <Block {...page.block.consumerVendorAccounts} />
      </section>
      <section>
        <Block {...page.block.benefitsForTheConsumer} />
      </section>
      <section>
        <Block {...page.block.benefitsForTheSmallBusiness} />
      </section>
    </div>
  );
}
