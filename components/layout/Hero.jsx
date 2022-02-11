import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'

export default function Hero() {

    return (
        <>

            <Container fluid className="hero">
                <Container>
                    <Row>
                        <Col md={6} className="block text-center text-md-start">
                            <h1 className="text-center text-md-start">Hero</h1>
                            <h2 className="text-center text-md-start">Subtitle</h2>
                            <p>Short text goes here</p>
                            <p>
                                <Button>
                                    Optional CTA
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}