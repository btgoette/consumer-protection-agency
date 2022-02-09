// React Components
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'
import { Container, Button, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

export default function CustomNav() {

    return (

        <Nav className="sticky-top">
            <Navbar collapseOnSelect className="navbar-dark" bg="dark" expand="md">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand>
                            <LazyLoadImage className="logo"
                                src="/images/logos/srz-logo-text-only.png"
                                alt="SRZ"
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
                                    <Link href="/" passHref>
                                        <Nav.Link >
                                            Home
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="blog/" passHref>
                                        <Nav.Link >
                                            Blog
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="testimonials/" passHref>
                                        <Nav.Link >
                                            Testimonials
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="registration/" passHref>
                                        <Nav.Link >
                                            Registration
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="sponsors/" passHref>
                                        <Nav.Link >
                                            Sponsors
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="contact/" passHref>
                                        <Nav.Link >
                                            Contact
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Collapse className="d-none d-lg-flex" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Link href="blog/" passHref>
                                    <Nav.Link >
                                        Blog
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="testimonials/" passHref>
                                    <Nav.Link >
                                        Testimonials
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="registration/" passHref>
                                    <Nav.Link >
                                        Registration
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="sponsors/" passHref>
                                    <Nav.Link >
                                        Sponsors
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href="contact/" passHref>
                                    <Nav.Link >
                                        Contact
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