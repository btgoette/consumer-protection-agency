import Head from 'components/common/Head'
import PageTitle from 'components/common/PageTitle'
import Section from 'components/common/Section'

import page from 'public/content/en_US/Page/Testimonials/testimonials.content'

export default function Testimonials() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <PageTitle {...page} />

      </div>

    </>

  );
}
