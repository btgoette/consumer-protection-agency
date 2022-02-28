import { Row, Col, Button } from "react-bootstrap";

export default function Intro(intro) {
  return (
    <>
      <a className="anchor" id={intro.slug}></a>
      <section className={intro.slug + " intro " + intro.container}>
        <Row>
          <Col
            lg={{
              offset: intro.column[0].offset,
              span: intro.column[0].span,
              order: intro.column[0].order,
            }}
            className="block"
          >
            <h2>{intro.title}</h2>
            {intro.subtitle.map(({ p }, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-center">
              <Button href={intro.cta.href}>{intro.cta.ctaLabel}</Button>
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}
