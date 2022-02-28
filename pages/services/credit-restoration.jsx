import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import TwoColumnGrid from 'components/common/TwoColumnGrid';

import page from 'public/content/en_US/Page/Services/creditRestoration.content'

export default function CreditRestoration() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />
        
        <TwoColumnGrid {...page.block.whatIsACreditScore} />

        <TwoColumnGrid {...page.block.whyIsThisImportant} />

        <TwoColumnGrid {...page.block.benefitsForTheConsumer} />

        <TwoColumnGrid {...page.block.benefitsOfHavingGoodCredit} />
        
      </div>

    </>

  );
}
