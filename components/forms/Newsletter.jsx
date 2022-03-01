import { Container, Row, Col } from "react-bootstrap";

export default function Newsletter(newsletter) {
  return (
    <>
      <Container fluid className="newsletter section">
        <Container>
          <Row className="block">
            <Col lg={{ offset: 2, span: 4 }}>
              <h2 className="mb-0 text-lg-start">Subscribe</h2>
              <p className="text-lg-start">to learn more about our services.</p>
            </Col>
            <Col lg={6}>
              <form
                className="newsletter-form d-block d-lg-flex align-items-center"
                action="https://forms.ontraport.com/v2.4/form_processor.php?"
                method="post"
                acceptCharset="UTF-8"
              >
                <fieldset className="newsletter-email">
                  <input
                    name="email"
                    type="email"
                    id="subscribe-email"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="newsletter-submit">
                  <input
                    type="submit"
                    name="submit-button"
                    value="Submit"
                    id="subscribe-submit"
                  />
                </fieldset>

                <input name="afft_" type="hidden" value="" />
                <input name="aff_" type="hidden" value="" />
                <input name="sess_" type="hidden" value="" />
                <input name="ref_" type="hidden" value="" />
                <input name="own_" type="hidden" value="" />
                <input name="oprid" type="hidden" value="" />
                <input name="contact_id" type="hidden" value="" />
                <input name="utm_source" type="hidden" value="" />
                <input name="utm_medium" type="hidden" value="" />
                <input name="utm_term" type="hidden" value="" />
                <input name="utm_content" type="hidden" value="" />
                <input name="utm_campaign" type="hidden" value="" />
                <input name="referral_page" type="hidden" value="" />
                <input name="_op_gclid" type="hidden" value="" />
                <input name="_op_gcid" type="hidden" value="" />
                <input name="_fbc" type="hidden" value="" />
                <input name="_fbp" type="hidden" value="" />
                <input name="uid" type="hidden" value="p2c240683f9" />
                <input name="uniquep2c240683f9" type="hidden" value="0" />
                <input
                  name="mopsbbk"
                  type="hidden"
                  value="A6C450349E3BCF5BF44C87DC:0D1B7860EEEB951D56945A18"
                />
                <input
                  name="mopbelg"
                  type="hidden"
                  value="0150444:09EA9C469556483767F3FB84:EB74917CCEB161F908191589"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
