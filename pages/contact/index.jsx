import Head from "components/common/Head";
import Section from "components/common/Section";
import ContactForm from "components/forms/Contact";

import page from "public/content/en_US/Page/Contact/contact.content";

export default function Contact() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Section {...page.block.hero} />
      <ContactForm />
    </div>
  );
}
