import { Container, Row, Col, Button } from 'react-bootstrap'

export default function BenefitsForConsumer() {

    return (
        <>
            <Container fluid className="benefits-for-consumer">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h2>
                                Benefits for the Consumer
                            </h2>
                            <h3>Access More Credit</h3>
                            <p>
                                The network gives consumers access to the marketplace with a wide variety of vendors willing to extend credit based on guidelines of the B2C Partners Network.
                            </p>
                            <h3>Higher Approval Rates</h3>
                            <p>
                                Base on the national average approval rate we shine above the rest and give borrowers a chance to prove their Creditworthiness.
                            </p>
                            <h3>Have a good credit mix</h3>
                            <p>
                                By being a member of the B2C partners network, members will benefit from
                                different types of credit accounts such as lines of credit, installment loans, and revolving accounts. This is a different approach compared to Industry practices that leave users without any depth on their credit profile.
                            </p>
                            <h3>Borrow money at better interest rates</h3>
                            <p>
                                Scores above 740 typically qualify for the lowest mortgage rates available. Higher credit scores also can get lower interest rates on car loans. Lenders also look at things like debt-to-income ratios, but in general, the B2C partners network offers an opportunity for a good score which leads to lower interest rates.
                            </p>
                            <h3>Get approval for higher loans</h3>
                            <p>
                                Through the B2C Partners Network staying on track with consumer vendor accounts leads to excellent payment history and will boost your credit score. Along with having a mature mix of accounts leading to higher loan approval rates.
                            </p>
                            <h3>Build a mature credit profile (800 Club)</h3>
                            <p>
                                Prove your PAYMENT HISTORY by making onetime payments. Choose from a list of small businesses in different industries to grow your CREDIT MIX.
                            </p>
                            <h3>Easy tracking &amp; reminders</h3>
                            <p>
                                Get assistance from our state-of-the-art mobile to stay updated on the go!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}