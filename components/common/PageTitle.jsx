import { Row, Container, Col } from "react-bootstrap";

export default function PageTitle(block) {
  return (
    <Container>
      <Row className="pt-5">
        <Col lg={{ offset: 2, span: 8}} className="block">
          <h1>{block.title}</h1>
        </Col>
      </Row>
    </Container>
  );
}
