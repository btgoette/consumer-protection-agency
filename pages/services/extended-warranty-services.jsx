import Head from "components/common/Head";
import Hero from "components/common/Hero";
import PricingPlans from "components/common/PricingPlans";
import Section from "components/common/Section";

import page from "public/content/en_US/Page/Services/extendedWarrantyServices.content";

export default function ExtendedWarrantyServices() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.intro} />
      <Section {...page.block.whyChooseUs} />
      <Section {...page.block.commonProtectionPlanPainPoints} />
      {/* <Section {...page.block.painPoints} /> */}
      <Section {...page.block.howItWorks} />
      <Section {...page.block.homeWarrantyPlan} />
      <Section {...page.block.electronics} />
      <Section {...page.block.electronicsCoverage} />
      <Section {...page.block.electronicsContinued} />
      <Section {...page.block.autoWarranty} />
      <Section {...page.block.autoWarrantyContinued} />
      <Section {...page.block.autoWarrantyPlanFeatures} />
      <Section {...page.block.pricingPlans} />
      <Section {...page.block.video} />
    </div>
  );
}
