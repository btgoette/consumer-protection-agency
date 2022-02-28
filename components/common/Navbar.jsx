// React Components
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "public/fonts/FontAwesome/fontawesome";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
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
          {/* Logo */}
          <Link href="/" passHref>
            <Navbar.Brand>
              <LazyLoadImage
                className="logo"
                src="/images/logos/cpa-logo-text-on-the-side.webp"
                alt="Consumer Protection Agency"
              />
            </Navbar.Brand>
          </Link>

          {/* Nav Grid */}
          <div className="nav-grid">
            {/* Desktop Contact and Login */}
            <div className="nav-desktop-contact">
              <a href="tel:18883182344" className="nav-contact-link">
                &nbsp;
                <FontAwesomeIcon icon={["fas", "phone"]} />
                &nbsp; 888-318-2344
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a href="https://54.219.27.199:7003" className="nav-contact-link">
                &nbsp;
                <FontAwesomeIcon icon={["fas", "user"]} />
                &nbsp; Client Login
              </a>
            </div>

            <div className="nav-navbar">
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
                      <Link href="/about/" passHref>
                        <Nav.Link>About</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/services/private-small-business-network">
                        Private Small Business Network
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/services/accounting-and-tax-services">
                        Accounting &amp; Tax Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/services/financial-education">
                        Financial Education
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/services/credit-restoration">
                        Credit Restoration
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                      <Link href="/in-the-news/" passHref>
                        <Nav.Link>In The News</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link href="/blog/" passHref>
                        <Nav.Link>Blog</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link href="/testimonials/" passHref>
                        <Nav.Link>Testimonials</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link href="/contact/" passHref>
                        <Nav.Link>Contact</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <a href="tel:18883182344" passHref>
                        <Nav.Link className="d-flex align-items-center">
                          <FontAwesomeIcon icon={["fas", "phone"]} />
                          &nbsp;&nbsp;888-318-2344
                        </Nav.Link>
                      </a>
                    </Nav.Item>
                    <Nav.Item>
                      <a href="https://54.219.27.199:7003" passHref>
                        <Nav.Link className="d-flex align-items-center">
                          <FontAwesomeIcon icon={["fas", "user"]} />
                          &nbsp;&nbsp;Client Login
                        </Nav.Link>
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
                    <Link href="/about/" passHref>
                      <Nav.Link>About</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/services/private-small-business-network">
                      Private Small Business Network
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/accounting-and-tax-services">
                      Accounting &amp; Tax Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/financial-education">
                      Financial Education
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services/credit-restoration">
                      Credit Restoration
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Link href="/in-the-news/" passHref>
                      <Nav.Link>In The News</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link href="/blog/" passHref>
                      <Nav.Link>Blog</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link href="/testimonials/" passHref>
                      <Nav.Link>Testimonials</Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link href="/contact/" passHref>
                      <Nav.Link>Contact</Nav.Link>
                    </Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </Nav>
  );
}
