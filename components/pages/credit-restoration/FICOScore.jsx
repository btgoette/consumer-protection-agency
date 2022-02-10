import { Container, Row, Col, Button } from 'react-bootstrap'

export default function FICOScore() {

    return (
        <>
            <Container fluid className="fico-score">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h2>
                                What Is a FICO/Credit Score?
                            </h2>
                            <p>
                                A FICO score is a credit score created by the Fair Isaac Corporation (FICO). Lenders use borrowers’ FICO scores along with other details on borrowers’ credit reports to assess credit risk and determine whether to extend credit. FICO scores take into account data in five areas to determine creditworthiness: payment history, current level of indebtedness, types of credit used, length of credit history, and new credit accounts.
                            </p>
                            <p>
                                It&apos;s a formula that ranges from 300 (the lowest) to 850 (highest). You are only responsible for 550 points in total.
                            </p>
                            <p>
                                <ol>
                                    <li>
                                        Payment History : 35 percent of your score (192.5 points)
                                    </li>
                                    <li>
                                        2. Amounts Owed : 30 Percent of your score (165 points)
                                    </li>
                                    <li>
                                        3. Credit History Length : 15 Percent of your score (82.5 points)
                                    </li>
                                    <li>
                                        4. Credit Mix : 10 percent of your score ( 55 points)
                                    </li>
                                    <li>
                                        5. New Credit : 10 percent of your score (55 Points)
                                    </li>
                                </ol>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}