import Head from "components/common/Head";
import Section from "components/common/Section";

import page from "public/content/en_US/Page/siteMap.content";

export default function SiteMap() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Section {...page.block.hero} />
    </div>
  );
}
