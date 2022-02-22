import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function TwoColumnGridList(block) {
    return (
        <>

            <a className="anchor" id={block.slug}></a>
            <Container fluid className="section">
                <Container className={block.slug}>
                    <Row className="block">
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