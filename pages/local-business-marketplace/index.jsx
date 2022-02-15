import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import TwoColumnOrder1 from 'components/common/TwoColumnGridOrder1'
import List from 'components/common/List'
import Menu from 'components/common/Menu'
import Video from 'components/common/Video'

import page from 'public/content/en_US/Page/localBusinessMarketplace.content'

export default function LocalBusinessMarketplace() {
  return (

    <>

      <div className={page.slug}> 

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

        <Menu />
        
        <TwoColumnOrder1 {...page.block.consumerVendorAccounts} />

        <List {...page.block.benefitsForTheConsumer} />

        <List {...page.block.benefitsForTheSmallBusiness} />

        <Video />

      </div>

    </>

  );
}
