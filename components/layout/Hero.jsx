import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function Hero() {

    return (
        <>

            <Container fluid className="hero">
                <Container>
                    <Row>
                        <Col className="block">
                            <h1>Hero</h1>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}