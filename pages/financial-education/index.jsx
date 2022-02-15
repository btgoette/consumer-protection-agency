import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import Menu from 'components/common/Menu'
import Video from 'components/common/Video'

import page from 'public/content/en_US/Page/financialEducation.content'

export default function FinancialEducation() {
  return (

    <>

      <div className={page.slug}> 

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

        <Menu />

        <Video />

      </div>

    </>

  );
}
