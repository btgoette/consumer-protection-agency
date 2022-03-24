import { Container, Row, Col, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MultiColumn(block) {
  return (
    <section className={block.slug}>
      <Container>
        <Row>
          {block.column.map(
            (
              { offset, span, order, title, subtitle, text, list, img, cta },
              i
            ) => (
              <Col key={i} lg={{ offset: offset, span: span, order: order }}>
                <figure>
                  <LazyLoadImage src={img.src} alt={img.alt} />
                </figure>
                <h2 className="text-center">{title}</h2>
                {text.map(({ p }, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
}
