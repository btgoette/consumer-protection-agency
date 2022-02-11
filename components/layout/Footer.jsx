import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';

import SignUp from 'components/forms/SignUp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {

    const today = new Date();

    return (
        <footer>

            <SignUp />

            {/* <Container fluid className="footer">
                <Container>
                    <Row>

                        <Col sm={6} lg={3}>
                            <Link href="/"><LazyLoadImage className="logo"
                                src="/images/logos/srz-logo-text-only.png"
                                alt="Consumer Protection Agency"
                            /></Link><br />
                        </Col>
                        <Col sm={6} lg={3}>
                            <h3>Socials</h3>
                            <ul className="footer-social d-flex">
                                <li>
                                    <a
                                        href="" rel="noreferrer" aria-label="Facebook" target="_blank">
                                        <FontAwesomeIcon icon={['fab', 'facebook']} />&nbsp;
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="" rel="noreferrer" aria-label="Instagram" target="_blank">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />&nbsp;
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="" rel="noreferrer" aria-label="Twitter" target="_blank">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />&nbsp;
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6} lg={3}>
                            <h3>Contact</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FontAwesomeIcon icon={['fab', 'wpforms']} />&nbsp;
                                    <Link href="">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['far', 'calendar-check']} />&nbsp;
                                    <Link href="">
                                        Hours: ....
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'phone']} />&nbsp;
                                    <Link href="">
                                        1-800-555-5555
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'envelope']} />&nbsp;
                                    <Link href="">
                                        support@consumerprotection.agency
                                    </Link>
                                </li>

                            </ul>
                        </Col>
                        <Col sm={6} lg={3}>
                            <h3>Links</h3>
                            <ul>
                                <li><Link href="/local-business-marketplace">Local Business Marketplace</Link></li>
                                <li><Link href="/accounting-and-tax-services">Accounting and Tax Services</Link></li>
                                <li><Link href="/financial-education">Financial Education</Link></li>
                                <li><Link href="/sponsors">Sponsors</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container> */}

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