import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import Menu from 'components/common/Menu'
import Video from 'components/common/Video'

import page from 'public/content/en_US/Page/accountingAndTaxServices.content'

export default function AccountingAndTaxServices() {
  return (

    <>

      <div className={page.slug}> 

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

      </div>

    </>

  );
}
