import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col } from 'react-bootstrap';

export default function Run() {
    return (
        <>
            <Container fluid className="bg-blue">
                <Container>
                    <Row className="align-items-center">
                        <Col md={{span:8, order:1 }}>
                            <h2>Swim</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt placeat dolorum, odit adipisci saepe labore, dolor similique blanditiis sed suscipit iste distinctio debitis!</p>
                        </Col>
                        <Col md={{span:4, order:0 }} className="text-center p-4">
                            <LazyLoadImage className="box-shadow w-100"
                                src="/images/pages/home/home-3.jpg"
                                alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}