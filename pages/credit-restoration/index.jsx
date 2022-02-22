import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import TwoColumnGridImage from 'components/common/TwoColumnGridImage'
import TwoColumnGridList from 'components/common/TwoColumnGridList'
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
        
        <TwoColumnGridImage {...page.block.whatIsACreditScore} />

        <TwoColumnGridImage {...page.block.whyIsThisImportant} />

        <TwoColumnGridList {...page.block.benefitsForTheConsumer} />

        <TwoColumnGridList {...page.block.benefitsOfHavingGoodCredit} />
        
      </div>

    </>

  );
}
