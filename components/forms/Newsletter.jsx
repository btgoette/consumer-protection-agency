import { Container, Row, Col } from "react-bootstrap";

export default function Newsletter(newsletter) {
  return (
    <section className="newsletter">
      <Container>
        <Row className="align-items-center">
          <Col xl={4}>
            <h2 className="mb-0 text-xl-start">Join our mailing list</h2>
            <p className="text-center text-xl-start mb-xl-0">
              Stay up to date with news, tips, and more.
            </p>
          </Col>
          <Col xl={8}>
            <form
              className="newsletter-form"
              action="https://forms.ontraport.com/v2.4/form_processor.php?"
              method="post"
              acceptCharset="UTF-8"
            >
              <fieldset className="newsletter-first-name">
                <input
                  aria-label="Name"
                  type="text"
                  name="firstname"
                  pattern="[a-zA-Z][a-zA-Z ]+"
                  placeholder="First Name"
                  id="mr-field-element-239782565674"
                  required
                />
              </fieldset>
              <fieldset className="newsletter-email">
                <input
                  name="email"
                  type="email"
                  id="mr-field-element-309465076175"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="newsletter-submit">
                <input
                  type="submit"
                  name="submit-button"
                  value="Submit"
                  id="mr-field-element-906286776126"
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
                value="0BD29BF1F484A3F24C461B5D:FB973EF9754B958688607A03"
              />
              <input
                name="mopbelg"
                type="hidden"
                value="0150455:14A437690DFB41CE167DFD19:AE7BC82C6769D912438CDA4A"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
