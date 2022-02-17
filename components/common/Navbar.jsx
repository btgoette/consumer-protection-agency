// React Components
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'

export default function CustomNav() {

    return (

        <Nav>
            <Container fluid className="top-bar">
                <Container className="d-flex">
                    <a href="tel:4693738788" className="d-none d-md-flex align-items-center">469-373-8788
                    </a>
                    <span className="d-none d-md-flex">&nbsp;|&nbsp;</span>
                    <a href="tel:18883182344" className="d-none d-md-flex align-items-center">
                        888-318-2344 (Toll Free)
                    </a>
                    <div className="login d-flex">
                        <Nav.Item className="ms-3">
                            <Link href="https://clientarea.vpnsafevault.com/login" passHref>
                                Client Login
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="ms-3">
                            <Link href="https://clientarea.vpnsafevault.com/login" passHref>
                                Agent Login
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="ms-3">
                            <Link href="https://clientarea.vpnsafevault.com/login" passHref>
                                Admin
                            </Link>
                        </Nav.Item>
                    </div>
                </Container>
            </Container>
            <Navbar collapseOnSelect className="navbar-dark" bg="dark" expand="md">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand>
                            <LazyLoadImage className="logo"
                                src="/images/logos/cpa-logo-text-on-the-side.png"
                                alt="Consumer Protection Agency"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Item>
                                    <Link href="/private-small-business-network/" passHref>
                                        <Nav.Link >
                                            Private Small Business Network
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="/accounting-and-tax-services/" passHref>
                                        <Nav.Link >
                                            Accounting &amp; Tax Services
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="/financial-education/" passHref>
                                        <Nav.Link >
                                            Financial Education
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="credit-restoration/" passHref>
                                        <Nav.Link >
                                            Credit Restoration
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Collapse className="d-none d-lg-flex align-items-center" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Link href="/private-small-business-network/" passHref>
                                    <Nav.Link >
                                        Private Small Business Network
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/accounting-and-tax-services/" passHref>
                                    <Nav.Link >
                                        Accounting &amp; Tax Services
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/financial-education/" passHref>
                                    <Nav.Link >
                                        Financial Education
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="/credit-restoration/" passHref>
                                    <Nav.Link >
                                        Credit Restoration
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Nav >

    );
}