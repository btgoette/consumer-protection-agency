import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro() {

    return (
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }}>
                            <h1>
                                Motivational Headline
                            </h1>
                            <p>Big picture mission statement etc, etc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora perferendis dicta voluptates quisquam consequatur corrupti porro neque veniam?</p>
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