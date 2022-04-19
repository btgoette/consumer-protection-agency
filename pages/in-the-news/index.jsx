import Head from "components/common/Head";
import PageTitle from "components/common/PageTitle";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/InTheNews/inTheNews.content";

export default function InTheNews() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <PageTitle {...page.block.hero} />      
      <Block {...page.block.comingSoon}/>
    </div>
  );
}
