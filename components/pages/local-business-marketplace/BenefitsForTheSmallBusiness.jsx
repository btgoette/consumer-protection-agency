import { Container, Row, Col, Button } from 'react-bootstrap'

export default function BenefitsForTheSmallBusiness() {

    return (
        <>
            <Container fluid className="benefits-for-the-small-business">
                <Container>
                    <Row>
                        <Col lg={{ offset: 2, span: 8 }} className="block">
                            <h2>
                                Benefits for the Small Business
                            </h2>
                            <h3>Expand &amp; Scale</h3>
                            <p>
                                Vendors can expand the radius of their business reach and transform from being a locally focused, to a national business without taking any additional steps other than being a partner of the B2C network.
                            </p>
                            <h3>Passive Income</h3>
                            <p>
                                Small businesses can now start generating consistent cashflow from members of the network. Whether a one-time purchase or a recurring order, the passive income gives the small business owner an injection or passive income.
                            </p>
                            <h3>New client acquisition</h3>
                            <p>
                                Members of the network will constantly introduce and refer new members on a daily basis. Partners watch their customer base grow on a weekly and monthly basis on auto-pilot.
                            </p>
                            <h3>CRM and customer data back-office</h3>
                            <p>
                                Businesses will gain access to prized consumer insights through a state-of-the-art CRM platform that will aggregate data base of the network. Tracking, billing and communication can all be done from your dashboard.
                            </p>
                            <h3>Executive partner opportunity</h3>
                            <p>
                                At the executive partner level, get a liaison (account manager) to assist taking your business to the next level. Build corporate credit, Dun &amp; Bradstreet setup with vendor account reporting, Paydex score, Better Business Bureau and company online presence.
                            </p>
                            <h3>Exposure &amp; Branding</h3>
                            <p>
                                Being a part of the network will generate brand exposure to consumers and other businesses in the network that have complimentary business services and/or products, resulting in better financial outcomes for members.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}