import { Container, Row, Col, Button } from "react-bootstrap";

export default function Intro(block) {
  let hasTitle;
  if (block.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h2>{block.title}</h2>;
    }
  };

  let hasText;
  if (block.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {block.text.map(({ p }, k) => (
            <p key={k}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasCTA;
  if (block.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p className="text-center">
          <Button href={block.cta.href}>{block.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  return (
    <>
      <a className="anchor" id="intro"></a>
      <section className="intro">
        <Container>
          <Row>
            <Col className="block" md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
              <div>
                {renderTitle()}
                {renderText()}
                {renderCTA()}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
