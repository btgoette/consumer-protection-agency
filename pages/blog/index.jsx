import Head from 'components/common/Head'
import PageTitle from 'components/common/PageTitle'

import page from 'public/content/en_US/Page/Blog/blog.content'

export default function Blog() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <PageTitle {...page} />

      </div>

    </>

  );
}
