import { Container, Row, Col } from "react-bootstrap";

import ContactForm from "components/forms/Contact";

import page from "public/content/en_US/Page/Services/accountingAndTaxServices.content";

export default function Contact() {
  return (
    <>
      <section>
        <Container>
          <Row className="block">
            <Col md={{ offset: 3, span: 6 }}>
              <h1 className="text-center">Contact Us</h1>
              <p>
                Please fill out the form below and we will get back to you as
                soon as possible.
              </p>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
