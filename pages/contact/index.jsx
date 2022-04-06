import Head from "components/common/Head";
import Block from "components/common/Block";
import PageTitle from "components/common/PageTitle";
import ContactForm from "components/forms/Contact";

import page from "public/content/en_US/Page/Contact/contact.content";

export default function Contact() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <PageTitle {...page.block.hero} />
      <ContactForm />
    </div>
  );
}
