import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function TwoColumnGridList(block) {
    return (
        <>
            <Container fluid className={block.slug, block.background}>
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
                            <ol>
                                {block.list.map(({ li }, i) => (
                                    <li key={i}>{li}</li>
                                ))}
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}