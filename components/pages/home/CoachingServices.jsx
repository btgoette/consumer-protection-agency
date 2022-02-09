import { Container, Row, Col, Button } from 'react-bootstrap'

export default function CoachingServices() {

    return (
        <>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }}>
                            <h2 className="text-center">
                                Coaching Services
                            </h2>
                            <p>Talk about Coaching etc, etc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora perferendis dicta voluptates quisquam consequatur corrupti porro neque veniam?</p>
                            <p>Second Paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora perferendis dicta voluptates quisquam consequatur corrupti porro neque veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos esse dignissimos!</p>
                            <p className="text-center">
                                <Button>
                                    Another Call to Action
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}