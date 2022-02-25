import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';


export default function CPAServicesMenu() {

    return (
        <>

            <Container fluid className="menu">
                <div className="cpa-services-menu-block psbn">
                    <Link href="/private-small-business-network">
                        <a>
                            <p>Private Small Business Network</p>
                        </a>
                    </Link>
                </div>
                <div className="cpa-services-menu-block ats">
                    <Link href="/accounting-and-tax-services">
                        <a>
                            <p>Accounting &amp; Tax Services </p>

                        </a>
                    </Link>
                </div>
                <div className="cpa-services-menu-block fe">
                    <Link href="/financial-education">
                        <a>
                            <p>Financial Education</p>
                        </a>
                    </Link>
                </div>
                <div className="cpa-services-menu-block cr">
                    <Link href="/credit-restoration">
                        <a>
                            <p>Credit Restoration</p>
                        </a>
                    </Link>
                </div>
            </Container>

        </>

    )
} 