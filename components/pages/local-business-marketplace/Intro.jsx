import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro() {

    return (
        <>
            <Container fluid className="intro">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h1>
                                The B2C Partners Network
                            </h1>
                            <p>The B2C Partners Network is a marketplace consisting of a network of small, medium, and large size businesses that offers its members an opportunity to gain credit worthiness. The objective of the marketplace is to offer consumers the ability to connect with vendors and build a financial relationship to establish a positive payment history while offering vendors new opportunities for growth, customer acquisition and passive income. The benefits to both small businesses and consumers in the marketplace are explained in later parts of this page.</p>
                            <p className="text-center">
                                <Button>
                                    Call to Action
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}