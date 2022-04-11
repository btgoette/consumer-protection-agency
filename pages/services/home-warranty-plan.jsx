import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/homeWarrantyPlan.content";

export default function HomeWarrantyPlan() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <section>
        <Block {...page.block.homeWarrantyPlan} />
      </section>
      <section>
        <Block {...page.block.homeWarrantyContinued} />
      </section>
      <section>
        <Block {...page.block.homeWarrantyFAQ} />
      </section>
      <section>
        <Block {...page.block.pricingPlans} />
      </section>
      {/* <Block {...page.block.video} /> */}
    </div>
  );
}
