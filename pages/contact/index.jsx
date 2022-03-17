import Head from 'components/common/Head'
import PageTitle from 'components/common/PageTitle'
import ContactForm from "components/forms/Contact"

import page from 'public/content/en_US/Page/Contact/contact.content'


export default function Contact() {
  return (
    <>
      <Head {...page}/>

      <PageTitle {...page} />
      
      <ContactForm />
              
    </>
  );
}
