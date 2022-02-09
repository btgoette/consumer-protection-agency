import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col } from 'react-bootstrap';

export default function TeamPhotos() {
    return (
        <>
            <Container fluid className="bg-red">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h2>Team Photos</h2>
                        </Col>
                        <Col md={6} className="text-center">
                            <LazyLoadImage className="w-100 p-2"
                                src="/images/pages/home/home-5.jpg"
                                alt="" />
                        </Col>
                        <Col md={6} className="text-center">
                            <LazyLoadImage className="w-100 p-2"
                                src="/images/pages/home/home-6.jpg"
                                alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}