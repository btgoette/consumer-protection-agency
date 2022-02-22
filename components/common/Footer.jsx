import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Menu from 'components/common/Menu'
import Newsletter from 'components/forms/Newsletter'

export default function Footer() {

    const today = new Date();

    return (
        <footer>

            <Menu />

            <Newsletter />

            <Container fluid className="footer">
                <Container>
                    <Row className="block">


                        <Col lg={{ span: 4, order: 1 }}>
                            <Link href="/">
                                <LazyLoadImage className="logo"
                                    src="/images/logos/cpa-logo-no-text.webp"
                                    alt="Consumer Protection Agency"
                                />
                            </Link><br />
                        </Col>

                        <Col lg={{ span: 4, order: 0 }}>
                            <ul>
                                <li>
                                    <a href="tel:4693738788">469-373-8788
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:18883182344">
                                        888-318-2344 (Toll Free)
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={{ span: 4, order: 2 }}>
                            <ul>
                                <li><Link href="/private-small-business-network">Private Small Business Network</Link></li>
                                <li><Link href="/accounting-and-tax-services">Accounting and Tax Services</Link></li>
                                <li><Link href="/financial-education">Financial Education</Link></li>
                                <li><Link href="/credit-restoration">Credit Restoration</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className="copyright">
                <Container>
                    <Row>
                        <Col>
                            Copyright &copy; {today.getFullYear()} Consumer Protection Agency
                        </Col>
                    </Row>
                </Container>
            </Container>

        </footer>
    )
}