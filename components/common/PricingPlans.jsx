import { Container, Row, Col } from "react-bootstrap";

export default function PricingPlans() {
  return (
    <>
      <section className="pricing-plans bg-blue">
        <Container>
          <Row>
            <Col lg={4}>
              <h3>Pick 1</h3>
              <p>
                Auto: $49.99
                <br />
                Electronics: $29.99
                <br />
                Home: $59.99
              </p>
            </Col>
            <Col lg={4}>
              <h3>Pick 2</h3>
              <p>
                Home & Electronics: $89.98
                <br />
                Auto & Electronics: $79.98
                <br />
                Home & Auto: $109.98
              </p>
            </Col>
            <Col lg={4}>
              <h3>Pick 3</h3>
              <p>
                Home + Electronics + Auto: $129.99
                <br />
                ($9.98 Savings)
              </p>
              <p className="divider"></p>
              <p className="text-small">
                refer 5 pick 3 customers and your pick 3 is free!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
