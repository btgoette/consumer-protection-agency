import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/ExtendedWarrantyServices/extendedWarrantyServices.content";

export default function ExtendedWarrantyServices() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
      <section>
        <Block {...page.block.whyChooseUs} />
        <Block {...page.block.commonProtectionPlanPainPoints} />
        <Block {...page.block.howItWorks} />
        <Block {...page.block.homeWarrantyPlan} />
        <Block {...page.block.homeWarrantyContinued} />
        <Block {...page.block.homeWarrantyFAQ} />
        <Block {...page.block.electronicsWarrantyPlan} />
        <Block {...page.block.electronics} />
        <Block {...page.block.electronicsCoverage} />
        <Block {...page.block.electronicsContinued} />
        <Block {...page.block.electronicsFeatures} />
        <Block {...page.block.electronicsFAQ} />
        <Block {...page.block.autoWarrantyPlan} />
        <Block {...page.block.autoWarranty} />
        <Block {...page.block.autoWarrantyContinued} />
        <Block {...page.block.autoWarrantyPlanFeatures} />
        <Block {...page.block.autoFAQ} />
        <Block {...page.block.pricingPlans} />
      </section>
    </div>
  );
}
