import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'

import page from 'public/content/en_US/Page/Services/accountingAndTaxServices.content'

export default function AccountingAndTaxServices() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

      </div>

    </>

  );
}
