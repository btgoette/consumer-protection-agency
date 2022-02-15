import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export default function Newsletter(newsletter) {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row>
                        <Col className="block">
                            <div className="row d-flex align-items-center rows">
                                <Col md={{ offset: 2, span: 4 }}>
                                    <h2 className="mb-0 text-start">Subscribe</h2>
                                    <p>to learn more about our services.</p>
                                </Col>
                                <Col md={6}>
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