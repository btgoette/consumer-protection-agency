import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro() {

    return (
        <>
            <Container fluid className="intro">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h1>
                            How Do You Define Credit?
                            </h1>
                            <p>According to Investopedia, credit is a contractual agreement in which a borrower receives something of value immediately and agrees to pay for it later, usually with interest. Focusing on financial reputation, most people don&apos;t realize the negative or positive affects that credit have on their livelihood until they need it. According to a S&amp;P Global Financial literacy survey, 55% of US adults are financially literate while only 24% of millennials understand basic financial topics. Experts who teach financial literacy are few and far between, as the result of the school system lack of modernization. Therefore, the knowledge is not being passed on to the next generation of students. Because of this the USA ranks 14th amongst other nations in financial literacy but yet the #1 economy in the world.</p>
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