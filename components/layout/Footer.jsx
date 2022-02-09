import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';

import SignUp from 'components/forms/SignUp';
import InstagramFeed from 'components/forms/InstagramFeed';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Footer() {

    const today = new Date();

    return (
        <footer>

            <SignUp />

            <InstagramFeed />

            <Container fluid className="footer">
                <Container>
                    <Row>

                        <Col sm={6} lg={3}>
                            <Link href="/"><LazyLoadImage className="logo"
                                src="/images/logos/srz-logo-text-only.png"
                                alt="SRZ"
                            /></Link><br />
                            <LazyLoadImage className="ironman"
                                src="/images/logos/official-iron-man-triclub-training-program.png"
                                alt="Official Iron TriClub Training Program"
                            />
                        </Col>
                        <Col sm={6} lg={3}>
                            <h3>Socials</h3>
                            <ul>
                                <li><a href="">Feisbuc</a></li>
                                <li><a href="https://www.instagram.com/srzcoach/">Instagram</a></li>
                                <li><a href="">Tweeter</a></li>
                                <li><a href="">YuTu</a></li>
                            </ul>
                        </Col>
                        <Col sm={6} lg={3}>
                            <h3>Contact</h3>
                            <ul>
                                <li>Email: <a href="">Sergio@srzcoaching.com</a></li>
                                <li>Phone: <a href="">1-999-999-9999</a></li>
                            </ul>
                        </Col>
                        <Col sm={6} lg={3}>
                            <h3>Links</h3>
                            <ul>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/testimonials">Testimonials</Link></li>
                                <li><Link href="/registration">Registration</Link></li>
                                <li><Link href="/sponsors">Sponsors</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className="copyright py-0">
                <Container>
                    <Row>
                        <Col>
                            &copy; {today.getFullYear()} SRZ Coaching
                        </Col>
                    </Row>
                </Container>
            </Container>

        </footer>
    )
}