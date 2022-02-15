import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro(intro) {

    return (
        <>
            <Container fluid className="intro">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h2>
                                {intro.title}
                            </h2>
                            {intro.subtitle.map(({ p }, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            <p className="text-center">
                                <Button>
                                    {intro.cta.ctaLabel}
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}