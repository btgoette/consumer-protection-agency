import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Menu from "components/common/Menu";
import Newsletter from "components/forms/Newsletter";

export default function Footer() {
  const today = new Date();

  return (
    <footer>
      <Menu />

      <Newsletter />

      <section className="footer text-center text-sm-start">
        <Container className="block">
          <Row className="align-items-center">
            <Col md={{ span: 10, offset: 1}} lg={{ span: 6, order: 0, offset: 0}}>
              <Link href="/" passHref>
                <LazyLoadImage
                  className="logo"
                  src="/images/logos/cpa-logo-text-on-the-side-white.webp"
                  alt="Consumer Protection Agency"
                />
              </Link>
              <Row>
                <Col sm={6}>
                  <ul className="text-center text-sm-start">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <a className="disabled">Services</a>
                      <ul className="border-lg-start">
                        <li>
                          <Link href="/services/private-small-business-network">
                            Private Small Business Network
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/accounting-and-tax-services">
                            Accounting and Tax Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/financial-education">
                            Financial Education
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/credit-restoration">
                            Credit Restoration
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/extended-warranty-services">
                            Extended Warranty Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul>
                    <li>
                      <a href="https://backoffice.consumerprotection.agency/">Client Login</a>
                    </li>
                    <li>
                      <Link href="/in-the-news">In The News</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/roadmap">Roadmap</Link>
                    </li>
                    <li>
                      <Link href="/site-map">Site Map</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col md={{ span: 10, offset: 1}} lg={{ span: 6, order: 1, offset: 0 }}>
              <h2 className="mt-4 mt-lg-5 text-center text-sm-start">Consumer Protection Agency</h2>
              <p className="text-justify">
                We are an organization focused on protecting consumers from all
                aspects of financial pitfalls. We provide ongoing financial
                education and a path through our financial literacy program
                ranging from teens to adults. We work with and for consumers
                protecting their rights by applying the law.
              </p>
              <h2 className="mt-4 text-center text-sm-start">Contact Us</h2>
              <a href="tel:18883182344">1-(888)-318-2344</a>
              <p className="copyright mt-4">
                Copyright &copy; {today.getFullYear()} Consumer Protection
                Agency
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
}
