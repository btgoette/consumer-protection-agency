import { Row, Container, Col } from "react-bootstrap";

export default function PageTitle(block) {
  return (
    <Container>
      <Row className="pt-5">
        <Col>
          <h1>{block.title}</h1>
        </Col>
      </Row>
    </Container>
  );
}
