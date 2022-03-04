import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import Video from 'components/common/Video'

import page from 'public/content/en_US/Page/Services/extendedWarrantyServices.content'

export default function ExtendedWarrantyServices() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <Hero {...page.hero} />

        <Intro {...page.block.intro} />

        <Video {...page.block.video} />

      </div>

    </>

  );
}
