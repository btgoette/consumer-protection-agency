import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function TwoColumnGridOrder0 (block) {
    return (
        <>
        <Container fluid className={block.slug}>
            <Container className="block">
                <Row>
                    <Col md={{ span: 6, order: 0}}>
                        <figure>
                            <LazyLoadImage
                                src={block.img.src}
                                alt={block.img.alt}
                            />
                        </figure>
                    </Col>
                    <Col md={{ span: 6, order: 1}}>
                        <h2>{block.title}</h2>
                        {block.subtitle.map(({p}, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container>
        
        </>
    )
}