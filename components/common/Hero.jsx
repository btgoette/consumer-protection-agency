import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero(hero) {
  let hasPageTitle;
  if (hero.pageTitle !== undefined) {
    hasPageTitle = true;
  } else {
    hasPageTitle = false;
  }

  const renderPageTitle = () => {
    if (hasPageTitle) {
      return <h1>{hero.pageTitle}</h1>;
    }
  };

  let hasText;
  if (hero.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {hero.text.map(({ p }, i) => (
            <p key={i}>{p}</p>
          ))}
        </>
      );
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
      <section className={hero.slug + " hero"}>
        <Container>
          <Row>
            <Col
              className="block"
              md={{
                offset: hero.column.offset,
                span: hero.column.span,
                order: hero.column.order,
              }}
            >
              <div>
                {renderPageTitle()}
                {renderText()}
                {renderCTA()}
              </div>
            </Col>
          </Row>
        </Container>
        <div className={"image-block " + hero.img.order}>
          <span>
          <img
            className="image"
            src={hero.img.src}
            alt={hero.img.alt}
            height="960"
            width="960"
          />
          </span>
        </div>
      </section>
    </>
  );
}
