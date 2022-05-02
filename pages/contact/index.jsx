import Head from "components/common/Head";
import Block from "components/common/Block";
import ContactForm from "components/forms/Contact";

import page from "public/content/en_US/Page/Contact/contact.content";

export default function Contact() {
  return (
    <div className={page.slug + " mb-5"}>
      <Head {...page} />
      <Block {...page.block.hero} />
      <ContactForm />
    </div>
  );
}
