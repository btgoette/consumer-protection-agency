import Head from 'components/common/Head'
import Hero from 'components/common/Hero'

import page from 'public/content/en_US/Page/Blog/blog.content'

export default function Blog() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <Hero {...page.hero} />

      </div>

    </>

  );
}
