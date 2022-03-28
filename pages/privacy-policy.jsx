import Head from "components/common/Head";
import Section from "components/common/Section";

import page from "public/content/en_US/Page/privacyPolicy.content";

export default function PrivacyPolicy() {
  return (
    <div className={page.slug}>
    <Head {...page}/>
    <Section {...page.block.hero}/>
  </div>
  )
}
