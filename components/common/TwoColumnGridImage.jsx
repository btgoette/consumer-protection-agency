import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function TwoColumnGridImage(block) {
    return (
        <>
            <Container fluid className={block.background + " " + block.slug}>
                <Container id={block.slug} className="block">
                    <Row>
                        <Col xs={12}>
                        <h2>{block.title}</h2>
                        </Col>
                        <Col md={{ offset: block.column[0].offset, span: block.column[0].span, order: block.column[0].order }}>
                            <figure>
                                <LazyLoadImage
                                    src={block.img.src}
                                    alt={block.img.alt}
                                />
                            </figure>
                        </Col>
                        <Col md={{ offset: block.column[1].offset, span: block.column[1].span, order: block.column[1].order }}>
                            {block.subtitle.map(({ p }, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}