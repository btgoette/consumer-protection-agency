import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro() {

    return (
        <>
            <Container fluid className="intro">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h1>
                                What is Consumer Protection Agency?
                            </h1>
                            <p>We are an organization focused on protecting consumers from all aspects of financial pitfalls. We provide ongoing financial education and a path through our financial literacy program ranging from teens to adults. We work with and for consumers protecting their rights by applying the law.</p>
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