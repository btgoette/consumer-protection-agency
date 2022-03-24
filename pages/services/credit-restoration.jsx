import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Section from 'components/common/Section'

import page from 'public/content/en_US/Page/Services/creditRestoration.content'

export default function CreditRestoration() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <Hero {...page.hero} />

        <Section {...page.block.intro} />
        
        <Section {...page.block.whatIsACreditScore} />

        <Section {...page.block.howCanYourCreditScoreAffectYou} />

        <Section {...page.block.benefitsForTheConsumer} />

        <Section {...page.block.benefitsOfHavingGoodCredit} />
        
        <Section {...page.block.video} />
        
      </div>

    </>

  );
}
