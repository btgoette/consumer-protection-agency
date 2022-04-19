import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Services/financialEducation.content";

export default function FinancialEducation() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.block.hero} />
    </div>
  );
}
