import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Intro from "components/common/Intro"

import page from "public/content/en_US/Page/financialEducation.content";

export default function FinancialEducation() {
  return (
    <>
      <div className={page.slug}>

        <Head {...page} />

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

      </div>
    </>
  );
}
