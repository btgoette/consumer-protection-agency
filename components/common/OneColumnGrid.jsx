import { Container, Row, Col, Figure } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function OneColumnGrid(block) {
  return (
    <>
      <section className={block.slug + " section "}>
        <Row className="block">
          <Col className="text-center"
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
                <Image src={block.image.src} alt={block.image.alt} width={264} height={203}/>
              </Figure>
            </Link>
            <br />
            <Link href={block.cta.href}>
              {block.cta.ctaLabel}
            </Link>
          </Col>
        </Row>
      </section>
    </>
  );
}
