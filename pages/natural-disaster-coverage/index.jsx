import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/NaturalDisasterCoverage/naturalDisasterCoverage.content";

export default function NaturalDisasterCoverage() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
      <section>
        <Block {...page.block.whyChooseUs} />
      </section>
      <section>
        <Block {...page.block.naturalDisastersNav} />
        <Block {...page.block.causeOfDamages} />
      </section>
      <section>
        <Block {...page.block.disastersThatAreNotCovered} />
      </section>
      <section>
        <Block {...page.block.vehicleProcess} />
        <Block {...page.block.autoVehicleCoverage} />
        <Block {...page.block.vehicleCoverageBenefits} />
      </section>
      <section>
        <Block {...page.block.pricingPlans} />
      </section>
    </div>
  );
}
