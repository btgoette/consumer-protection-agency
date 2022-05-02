import Head from "components/common/Head";
import PageTitle from "components/common/PageTitle";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/privacyPolicy.content";

export default function PrivacyPolicy() {
  return (
    <div className={page.slug + " mb-5"}>
    <Head {...page}/>
    <Block {...page.block.hero}/>
    <Block {...page.block.privacyPolicy}/>
    <Block {...page.block.informationCollected}/>
    <Block {...page.block.logData}/>
    <Block {...page.block.cookies}/>
    <Block {...page.block.serviceProviders}/>
    <Block {...page.block.security}/>
    <Block {...page.block.linksToOtherSites}/>
    <Block {...page.block.childrenPolicy}/>
    <Block {...page.block.changesToThisPolicy}/>
    <Block {...page.block.contact}/>
    
  </div>
  )
}
