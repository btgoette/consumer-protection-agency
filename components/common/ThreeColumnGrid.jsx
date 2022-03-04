import { Container, Row, Col, Figure } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ThreeColumnGrid(block) {
  return (
    <>
     <a className="anchor" id={block.slug}></a>
      <section className={block.slug + " section container"}>
        <Row className="block">
          <Col xs={12}>
          <h2>{block.title}</h2>
          </Col>
          {block.column.map(({ offset, span, order, title, subtitle, img }, i) => (
            <Col className="block"
              key={i}
              md={{
                offset: offset,
                span: span,
                order: order,
              }}
            >
              <Figure className="p-1">
                  <LazyLoadImage src={img.src} alt={img.alt} />
                  <Figure.Caption>{img.caption}</Figure.Caption>
              </Figure>
              <h3 className="text-center">{title}</h3>
              {subtitle.map(({ p }, j) => (
                <p key={j}>{p}</p>
              ))}
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}
