import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Hero(hero) {

    return (
        <>
            <Container fluid className={hero.slug}>
                <Container>
                    <Row>
                        <Col md={{offset: hero.column[0].offset, span: hero.column[0].span, order: hero.column[0].order}} className="block text-center text-md-start">
                            <h1 className="text-center text-md-start">{hero.title}</h1>
                            <p className="text-center text-md-start">{hero.subtitle}</p>
                            <p>
                                <Button href={hero.cta.href}>
                                    {hero.cta.ctaLabel}
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}