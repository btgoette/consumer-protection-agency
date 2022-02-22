import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export default function Newsletter(newsletter) {

    return (

        <>

            <Container fluid className="newsletter section">
                <Container>
                    <Row className="block">
                        <Col>
                            <div className="row d-flex align-items-center text-center rows mb-5">
                                <Col lg={{ offset: 2, span: 4 }}>
                                    <h2 className="mb-0 text-lg-start">Subscribe</h2>
                                    <p className="text-lg-start">to learn more about our services.</p>
                                </Col>
                                <Col lg={6}>
                                    <div className="d-none d-md-flex mx-5">
                                        <div className="input-group mb-3 mt-4">
                                            <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-secondary border-rad" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </div>
                                    <div className="d-flex d-md-none mx-2">
                                        <div className="mb-3 mx-auto mt-1">
                                            <input type="text" className="form-control mx-auto w-100 mb-2" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="w-100 btn btn-secondary border-rad" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container >

        </>

    )
}