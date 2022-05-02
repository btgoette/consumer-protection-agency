import Head from "components/common/Head";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/roadmap.content";

export default function RoadMap() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Block {...page.block.hero} />
      {/* <Block {...page.block.roadmap} /> */}
    </div>
  );
}
