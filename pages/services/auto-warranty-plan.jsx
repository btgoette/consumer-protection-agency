import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/autoWarrantyPlan.content";

export default function AutoWarrantyPlan() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <section>
        <Block {...page.block.autoWarrantyPlan} />
      </section>
      <section>
        <Block {...page.block.autoWarranty} />
      </section>
      <section>
        <Block {...page.block.autoWarrantyContinued} />
      </section>
      <section>
        <Block {...page.block.autoWarrantyPlanFeatures} />
      </section>
      <section>
        <Block {...page.block.autoFAQ} />
      </section>
      <section>
        <Block {...page.block.pricingPlans} />
      </section>
      {/* <Block {...page.block.video} /> */}
    </div>
  );
}
