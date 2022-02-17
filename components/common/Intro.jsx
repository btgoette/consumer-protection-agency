import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro(intro) {

    return (
        <>
            <Container fluid className="intro">
                <Container id={intro.slug} className={intro.slug}>
                    <Row>
                        <Col lg={{ offset: intro.column[0].offset, span: intro.column[0].span, order: intro.column[0].order }} className="block">
                            <h2>
                                {intro.title}
                            </h2>
                            {intro.subtitle.map(({ p }, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            <p className="text-center">
                                <Button href={intro.cta.url}>
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