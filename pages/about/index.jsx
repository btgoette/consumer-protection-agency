import Head from "components/common/Head";
import PageTitle from "components/common/PageTitle";

import page from "public/content/en_US/Page/About/about.content";

export default function About() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <PageTitle {...page.block.hero} />
    </div>
  );
}
