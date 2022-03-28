import Head from "components/common/Head";
import Section from "components/common/Section";

import page from "public/content/en_US/Page/roadmap.content";

export default function RoadMap() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Section {...page.block.hero} />
      <Section {...page.block.roadmap} />
    </div>
  );
}
