import { Container, Row, Col, Figure } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function TwoColumnGridImage(block) {
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
                            <Figure>
                                <LazyLoadImage
                                    src={block.img.src}
                                    alt={block.img.alt}
                                />
                                <Figure.Caption>
                                   {block.img.caption}
                                </Figure.Caption>
                            </Figure>
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