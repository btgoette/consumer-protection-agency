import { Container, Row, Col, Figure } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function OneColumnGrid(block) {
  if (block.img) {
    return (
      <>
        <section className={block.slug + " section "}>
          <Row className="block">
            <Col
              className="text-center"
              md={{
                offset: block.column[0].offset,
                span: block.column[0].span,
                order: block.column[0].order,
              }}
            >
              <h1 className="text-center">{block.title}</h1>
              <h2>{block.subtitle}</h2>
              <Link href={block.cta.href} passHref>
                <Figure>
                  <Image
                    src={block.img.src}
                    alt={block.img.alt}
                    width={264}
                    height={203}
                  />
                </Figure>
              </Link>
              <br />
              <Link href={block.cta.href}>{block.cta.ctaLabel}</Link>
            </Col>
          </Row>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className={block.slug + " section container"}>
          <Row className="block">
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
