import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';


export default function CPAServicesMenu() {

    return (
        <>

            <Container fluid className="menu">
                <Row>
                    <Col xs={6} lg={3} className="cpa-services-menu-block lbmp">
                        <Link href="/private-small-business-network">
                            <a>
                                <p>Private Small Business Network</p>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={6} lg={3} className="cpa-services-menu-block ats">
                        <Link href="/accounting-and-tax-services">
                            <a>
                                <p>Accounting &amp; Tax Services </p>

                            </a>
                        </Link>
                    </Col>
                    <Col xs={6} lg={3} className="cpa-services-menu-block fe">
                        <Link href="/financial-education">
                            <a>
                                <p>Financial Education</p>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={6} lg={3} className="cpa-services-menu-block cr">
                        <Link href="/credit-restoration">
                            <a>
                                <p>Credit Restoration</p>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </>

    )
} 