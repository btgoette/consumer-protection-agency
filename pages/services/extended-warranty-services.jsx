import Head from "components/common/Head";
import Hero from "components/common/Hero";

import Intro from "components/common/Intro";
import PricingPlans from "components/common/PricingPlans";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/extendedWarrantyServices.content";

export default function ExtendedWarrantyServices() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Intro {...page.block.intro} />
      <Block {...page.block.whyChooseUs} />
      <Block {...page.block.commonProtectionPlanPainPoints} />
      {/* <Block {...page.block.painPoints} /> */}
      <Block {...page.block.howItWorks} />
      <Block {...page.block.homeWarrantyPlan} />
      <Block {...page.block.homeWarrantyContinued} />
      <Block {...page.block.homeWarrantyFAQ} />
      <Block {...page.block.electronicsWarrantyPlan} />
      <Block {...page.block.electronics} />
      <Block {...page.block.electronicsCoverage} />
      <Block {...page.block.electronicsContinued} />
      <Block {...page.block.electronicsFAQ} />
      <Block {...page.block.autoWarranty} />
      <Block {...page.block.autoWarrantyContinued} />
      <Block {...page.block.autoWarrantyPlanFeatures} />
      <Block {...page.block.pricingPlans} />
      <Block {...page.block.video} />
    </div>
  );
}
