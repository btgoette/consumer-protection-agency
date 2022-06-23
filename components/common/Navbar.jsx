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
  CloseButton,
} from "react-bootstrap";

export default function CustomNav() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="cpa-nav sticky-top">
          <Container fluid>
            {/* Logo */}
            <Link href="/" passHref>
              <Navbar.Brand>
                <img
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
                <Nav className="justify-content-end pe-3">
                  <Nav.Item>
                    <Nav.Link href="tel:18883182344">
                      <FontAwesomeIcon icon={["fas", "phone"]} />{" "}
                      &nbsp;&nbsp;888-318-2344&nbsp;&nbsp;|
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://backoffice.consumerprotection.agency/">
                      <FontAwesomeIcon icon={["fas", "user"]} />
                      &nbsp;&nbsp;Client Login
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton closeVariant="white">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end pe-3">
                    <Nav.Item>
                      <Nav.Link href="/natural-disaster-coverage">Natural Disaster Coverage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/extended-warranty-services">Extended Warranty Plans</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link href="/about/">About</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
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
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/in-the-news/">In The News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/blog/">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/testimonials/">Testimonials</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/contact/">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="d-block d-lg-none"
                        href="tel:18883182344"
                      >
                        <FontAwesomeIcon icon={["fas", "phone"]} />{" "}
                        &nbsp;&nbsp;888-318-2344
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="d-block d-lg-none"
                        href="https://backoffice.consumerprotection.agency/"
                      >
                        <FontAwesomeIcon icon={["fas", "user"]} />
                        &nbsp;&nbsp;Client Login
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
