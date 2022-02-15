import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import TwoColumnGridOrder0 from 'components/common/TwoColumnGridOrder0'
import TwoColumnGridOrder1 from 'components/common/TwoColumnGridOrder1'
import TwoColumnGridListOrder0 from 'components/common/TwoColumnGridListOrder0'
import TwoColumnGridListOrder1 from 'components/common/TwoColumnGridListOrder1'
import List from 'components/common/List'
import Menu from 'components/common/Menu'
import Video from 'components/common/Video'

import page from 'public/content/en_US/Page/creditRestoration.content'

export default function CreditRestoration() {
  return (

    <>

      <div className={page.slug}> 

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />
        
        <Menu />
        
        <TwoColumnGridOrder1 {...page.block.whatIsACreditScore} />

        <TwoColumnGridOrder0 {...page.block.whyIsThisImportant} />

        <TwoColumnGridListOrder1 {...page.block.benefitsForTheConsumer} />

        <TwoColumnGridListOrder0 {...page.block.benefitsOfHavingGoodCredit} />

        <Video />

      </div>

    </>

  );
}
