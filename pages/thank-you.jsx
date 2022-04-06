import { Container, Row, Col } from "react-bootstrap";

import Head from "components/common/Head";
import PageTitle from "components/common/PageTitle";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/thankYou.content";

export default function ThankYou() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <PageTitle {...page.block.hero} />
    </div>
  );
}
