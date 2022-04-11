import Head from "components/common/Head";
import Hero from "components/common/Hero";
import PageTitle from "components/common/PageTitle";
import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/electronicsWarrantyPlan.content";

export default function ElectronicsWarrantyPlan() {
  return (
    <div className={page.slug}>
      <Head {...page}/>
      <section>
        <Block {...page.block.electronicsWarrantyPlan} />
      </section>
      <section>
        <Block {...page.block.electronics} />
      </section>
      <section>
        <Block {...page.block.electronicsCoverage} />
      </section>
      <section>
        <Block {...page.block.electronicsContinued} />
      </section>
      <section>
        <Block {...page.block.electronicsFeatures} />
      </section>
      <section>
        <Block {...page.block.electronicsFAQ} />
      </section>
      <section>
        <Block {...page.block.pricingPlans} />
      </section>
      {/* <Block {...page.block.video} /> */}
    </div>
  );
}
