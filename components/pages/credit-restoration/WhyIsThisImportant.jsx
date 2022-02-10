import { Container, Row, Col, Button } from 'react-bootstrap'

export default function WhyIsThisImportant() {

    return (
        <>
            <Container fluid className="why-is-this-important">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h2>
                                Why is this Important?
                            </h2>
                            <p>
                                Your credit score plays a vital role in your overall financial health. The so called, &ldquo;American Dream&rdquo; includes getting a house, car, job and children education. Over the years, businesses are making adjustments to their customer acquisition model to quality for a better quality of customers. In today&apos;s time, credit is now required to get cellphones, apartments, car rental, insurance and a normal part of a job application process. Good credit can lead to better interest rates for a home, car, and personal loan. A positive financial reputation can save you thousands of dollars and even free up cash flow. As mentioned before, getting a job requires credit history as it can be viewed as stability and even how responsible you are.
                            </p>
                            <p>
                                When institutions, companies or lenders view your credit reports, there are certain guidelines or &ldquo;Laws&rdquo; that they must be followed. These laws are the FDCPA (Fair Debt Collections Act), FCRA (Fair Credit Reporting Act), UDAAP (Unfair Deceptive or Abusive Acts or Practices) and the TCA (Telephone Communications Act). These are known as Consumer Laws which was created to protect consumers. These laws are violated on a daily bases by large institutions. The uneducated consumer falls victim to their illegal and deceptive practices totaling billions of dollars in profits for the large corporation!
                            </p>
                            <p>
                                The Consumer Protection Agency steps in, upholds and enforces the law for the consumer.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}