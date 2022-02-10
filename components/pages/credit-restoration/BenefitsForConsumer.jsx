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
                            <p>
                               <ol>
                                   <li>Continuous Credit Education</li>
                                   <li>Protection from deceptive practice</li>
                                   <li>Credit report monitoring</li>
                                   <li>ID theft protection</li>
                                   <li>Credit score increase</li>
                                   <li>Credit audit report</li>
                               </ol>
                            </p>
                            <h2>
                                Benefits of having good credit
                            </h2>
                            <p>
                            <ol>
                                   <li>Get Better Rates on Car Insurance</li>
                                   <li>Save on Other Types of Insurance </li>
                                   <li>Qualify for Lower Credit Card Interest</li>
                                   <li>Get Approved for Higher Credit Limits</li>
                                   <li>Have More Housing Options</li>
                                   <li>Get Utility Services More Easily</li>
                                   <li>Get a Cell Phone Without Prepaying or Making a Security Deposit</li>
                                   <li>Look Better to Potential Employers</li>
                               </ol>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}