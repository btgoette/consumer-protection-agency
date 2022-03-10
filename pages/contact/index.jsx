import { Container, Row, Col } from "react-bootstrap";



import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import Section from 'components/common/Section'
import ContactForm from "components/forms/Contact"

import page from 'public/content/en_US/Page/Contact/contact.content'


export default function Contact() {
  return (
    <>
      <Head {...page}/>

      <Hero {...page.hero}/>
      
      <ContactForm />
              
    </>
  );
}
