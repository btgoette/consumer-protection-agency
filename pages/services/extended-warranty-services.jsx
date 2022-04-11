import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Intro from "components/common/Intro";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/extendedWarrantyServices.content";

export default function ExtendedWarrantyServices() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Intro {...page.block.intro} />
      <section>
        <Block {...page.block.whyChooseUs} />
      </section>
      <section>
        <Block {...page.block.commonProtectionPlanPainPoints} />
      </section>
      <section>
        {/* <Block {...page.block.painPoints} /> */}
        <Block {...page.block.howItWorks} />
      </section>
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
