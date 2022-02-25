// React Components
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
} from "react-bootstrap";


export default function CustomNav() {
  return (
    <Nav className="sticky-top">
      <Navbar
        collapseOnSelect
        sticky="top"
        className="navbar-dark"
        bg="dark"
        expand="lg"
      >
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <LazyLoadImage
                className="logo"
                src="/images/logos/cpa-logo-text-on-the-side.webp"
                alt="Consumer Protection Agency"
              />
            </Navbar.Brand>
          </Link>
          <div className="py-2">
            <div className="d-none d-lg-flex float-end pe-2">
              <a href="tel:18883182344" className="d-flex align-items-center">
              &nbsp;<FontAwesomeIcon icon={['fas', 'phone']} />&nbsp;
              888-318-2344</a>
              <span>&nbsp;|&nbsp;</span>
              <a href="https://54.219.27.199:7003" className="d-flex align-items-center">
              &nbsp;<FontAwesomeIcon icon={['fas', 'user']} />&nbsp;
                Client Login</a>
            </div>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Item>
                    <Link href="/private-small-business-network/" passHref>
                      <Nav.Link>Private Small Business Network</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link href="/accounting-and-tax-services/" passHref>
                      <Nav.Link>Accounting &amp; Tax Services</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link href="/financial-education/" passHref>
                      <Nav.Link>Financial Education</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link href="credit-restoration/" passHref>
                      <Nav.Link>Credit Restoration</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <a href="tel:18883182344" passHref>
                      <Nav.Link className="d-flex align-items-center"><FontAwesomeIcon icon={['fas', 'phone']} />&nbsp;&nbsp;888-318-2344</Nav.Link>
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a href="https://54.219.27.199:7003" passHref>
                      <Nav.Link className="d-flex align-items-center"><FontAwesomeIcon icon={['fas', 'user']} />&nbsp;&nbsp;Client Login</Nav.Link>
                    </a>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Collapse
              className="d-none d-lg-flex float-end pt-2 align-items-center"
              id="basic-navbar-nav"
            >
              <Nav className="ms-auto">
                <Nav.Item>
                  <Link href="/private-small-business-network/" passHref>
                    <Nav.Link>Private Small Business Network</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/accounting-and-tax-services/" passHref>
                    <Nav.Link>Accounting &amp; Tax Services</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/financial-education/" passHref>
                    <Nav.Link>Financial Education</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/credit-restoration/" passHref>
                    <Nav.Link>Credit Restoration</Nav.Link>
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </Nav>
  );
}
