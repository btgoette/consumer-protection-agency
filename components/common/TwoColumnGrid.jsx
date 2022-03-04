import { Container, Row, Col, Figure } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TwoColumnGrid(block) {
  // Columns with images
  if (block.img) {
    // Columns with image and list
    if (block.list) {
      return (
        <>
          <a className="anchor" id={block.slug}></a>
          <section className={block.slug + " section container"}>
            <Row className="block align-items-center">
              <Col xs={12}>
                <h2>{block.title}</h2>
              </Col>
              <Col
                md={{
                  offset: block.column[0].offset,
                  span: block.column[0].span,
                  order: block.column[0].order,
                }}
              >
                <figure>
                  <LazyLoadImage src={block.img.src} alt={block.img.alt} />
                </figure>
              </Col>
              <Col
                md={{
                  offset: block.column[1].offset,
                  span: block.column[1].span,
                  order: block.column[1].order,
                }}
              >
                <ol>
                  {block.list.map(({ li }, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ol>
              </Col>
            </Row>
          </section>
        </>
      );
    }
    // Columns with image and text
    else {
      return (
        <>
          <a className="anchor" id={block.slug}></a>
          <section className={block.slug + " section container"}>
            <Row className="block align-items-center">
              <Col xs={12}>
                <h2 className="d-block d-md-none">{block.title}</h2>
              </Col>
              <Col
                md={{
                  offset: block.column[0].offset,
                  span: block.column[0].span,
                  order: block.column[0].order,
                }}
              >
                <Figure>
                  <LazyLoadImage src={block.img.src} alt={block.img.alt} />
                  <Figure.Caption>{block.img.caption}</Figure.Caption>
                </Figure>
              </Col>
              <Col
                md={{
                  offset: block.column[1].offset,
                  span: block.column[1].span,
                  order: block.column[1].order,
                }}
              >
                <h2 className="d-none d-md-block">{block.title}</h2>
                {block.subtitle.map(({ p }, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Col>
            </Row>
          </section>
        </>
      );
    }
  }
  // Columns with 2 lists
  else if (block.list) {
    const listLength = block.list.length;
    const listMiddle = Math.round(listLength / 2);

    return (
      <>
        <a className="anchor" id={block.slug}></a>
        <section className={block.slug + " section container"}>
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
  } else {
    return (
      <>
        <a className="anchor" id={block.slug}></a>
        <section className={block.slug + " section container"}>
          <Row className="block">
            {block.column.map(({ offset, span, order, title, list }, i) => (
              <Col
                className="block"
                key={i}
                md={{
                  offset: offset,
                  span: span,
                  order: order,
                }}
              >
                <h2 className="text-center">{title}</h2>
                <ol>
                  {list.map(({ li }, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ol>
              </Col>
            ))}
          </Row>
        </section>
      </>
    );
  }
}
