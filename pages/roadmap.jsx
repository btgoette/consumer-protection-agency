import Head from "components/common/Head";
import PageTitle from "components/common/PageTitle";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/roadmap.content";

export default function RoadMap() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <PageTitle {...page.block.hero} />
      <Block {...page.block.comingSoon}/>
      <Block {...page.block.roadmap} />
    </div>
  );
}
