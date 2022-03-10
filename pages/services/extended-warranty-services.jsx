import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Section from 'components/common/Section'

import page from 'public/content/en_US/Page/Services/extendedWarrantyServices.content'

export default function ExtendedWarrantyServices() {
  return (

    <>

      <div className={page.slug}> 

        <Head {...page}/>

        <Hero {...page.hero} />

        <Section {...page.block.intro} />
        
        <Section {...page.block.commonProtectionPlanPainPoints} />

        <Section {...page.block.whyChooseUs} />

        <Section {...page.block.video} />

      </div>

    </>

  );
}