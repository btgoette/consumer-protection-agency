import { Container, Row, Col } from "react-bootstrap";

import Head from "components/common/Head";
import Section from "components/common/Section";

import page from "public/content/en_US/Page/thankYou.content";

export default function ThankYou() {
  return (
    <>
      <Head {...page} />

      <Section {...page.block.hero} />
    </>
  );
}
