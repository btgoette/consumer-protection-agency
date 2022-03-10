import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero(hero) {
  let hasTitle;
  if (hero.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h1>{hero.title}</h1>;
    }
  };

  let hasSubtitle;
  if (hero.subtitle !== undefined) {
    hasSubtitle = true;
  } else {
    hasSubtitle = false;
  }

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return <p className="text-center text-md-start">{hero.subtitle}</p>;
    }
  };

  let hasCTA;
  if (hero.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p>
          <Button href={hero.cta.href}>{hero.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  return (
    <>
      <section className={hero.slug}>
        <Container>
          <Row className="block">
            <Col
              md={{
                offset: hero.column[0].offset,
                span: hero.column[0].span,
                order: hero.column[0].order,
              }}
              className="hero"
            >
              {renderTitle()}
              {renderSubtitle()}
              {renderCTA()}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
