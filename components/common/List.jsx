import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function List(block) {
  const listLength = block.list.length;
  const listMiddle = Math.round(listLength / 2);

  return (
    <>
      <a className="anchor" id={block.slug}></a>
      <section className={block.slug + " section " + block.container}>
        <Row className="block">
          <Col md={12}>
            <h2>{block.title}</h2>
          </Col>
          <Col md={{ span: 6, order: 0 }}>
            {block.list.slice(0, listMiddle).map(({ title, subtitle }, i) => (
              <div key={i}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            ))}
          </Col>
          <Col md={{ span: 6, order: 1 }}>
            {block.list
              .slice(listMiddle, listLength)
              .map(({ title, subtitle }, i) => (
                <div key={i}>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              ))}
          </Col>
        </Row>
      </section>
    </>
  );
}
