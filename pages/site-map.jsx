import Head from "components/common/Head";
import PageTitle from "components/common/PageTitle";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/siteMap.content";

export default function SiteMap() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <PageTitle {...page.block.hero} />
    </div>
  );
}
