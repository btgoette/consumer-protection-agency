import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col } from 'react-bootstrap';


export default function InstagramFeed() {

    return (
        <>

            <Container fluid className="px-0 py-0">
                <Row className="px-0 py-0">
                    <Col className="px-0">
                        <a href="https://www.instagram.com/p/CZaYSewr8hE/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-02-01-22-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="px-0">
                        <a href="https://www.instagram.com/p/CXKBqpYvB58/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-12-06-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="d-none d-sm-flex px-0">
                        <a href="https://www.instagram.com/p/CWCV5xgsyXc/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-11-08-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="d-none d-sm-flex px-0">
                        <a href="https://www.instagram.com/p/CVl0vmjMo8e/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-10-28-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="d-none d-md-flex px-0">
                        <a href="https://www.instagram.com/p/CVOJic8v1ZO/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-10-19-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="d-none d-md-flex px-0">
                        <a href="https://www.instagram.com/p/CU5saJxFXyS/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-10-11-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="d-none d-lg-flex px-0">
                        <a href="https://www.instagram.com/p/CUv82RMjbfd/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-10-07-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                    <Col className="d-none d-lg-flex px-0">
                        <a href="https://www.instagram.com/p/CUVDlFbFLmu/">
                            <LazyLoadImage className="w-100"
                                src="/images/instagram/srz-ig-09-27-21-1.jpg"
                                alt="" />
                        </a>
                    </Col>
                </Row>
            </Container>

        </>
    )
}