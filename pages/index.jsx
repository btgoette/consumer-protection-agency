import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Intro from 'components/common/Intro'
import Video from 'components/common/Video'

import page from 'public/content/en_US/Page/home.content'

export default function Home() {
  return (

    <>

      <div className={page.slug}>

        <Head {...page}/>

        <Hero {...page.hero}/>

        <Intro {...page.block.intro}/>

        <Video {...page.block.video} />

      </div>

    </>

  );
}
