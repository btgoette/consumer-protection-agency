// React Components
import { Container, Row, Col } from "react-bootstrap";
// import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
  return (
    <section>
      <Container>
        <Row className="block section-end">
          <Col md={{ offset: 3, span: 6, order: 0 }}>
            <h2 className="text-center">Contact Form</h2>
            <p className="text-center">
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>
            <form
              className="contact-form"
              id="contactForm"
              method="POST"
              action="https://forms.ontraport.com/v2.4/form_processor.php?"
              acceptCharset="UTF-8"
            >
              <fieldset>
                <label htmlFor="mr-field-element-665400750684">
                  First Name<span className="required">*</span>
                </label>
                <input
                  aria-label="First Name"
                  type="text"
                  name="firstname"
                  pattern="[a-zA-Z][a-zA-Z ]+"
                  id="mr-field-element-665400750684"
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="mr-field-element-488599729958">
                  Email<span className="required">*</span>
                </label>
                <input
                  aria-label="Email"
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  id="mr-field-element-488599729958"
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="mr-field-element-982783901333">
                  Phone<span className="required">*</span>
                </label>
                <input
                  aria-label="Phone"
                  type="tel"
                  name="sms_number"
                  pattern="[0-9]{10}"
                  id="mr-field-element-282710628776"
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="mr-field-element-167372072412">Comment</label>
                <textarea
                  aria-label="Comment"
                  name="notes"
                  id="mr-field-element-167372072412"
                ></textarea>
              </fieldset>

              <fieldset className="text-center">
                <input
                  type="submit"
                  name="submit-button"
                  value="Submit"
                  id="mr-field-element-396621743854"
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
              <input name="uid" type="hidden" value="p2c240683f10" />
              <input name="uniquep2c240683f10" type="hidden" value="0" />
              <input
                name="mopsbbk"
                type="hidden"
                value="C19E6DA91A39DE2827C87AB1:F0C8653FAA7A529A3868578F"
              />
              <input
                name="mopbelg"
                type="hidden"
                value="0150789:AD61264D9AE121283DA509B5:8578147E1A0B44EAC28D832B"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
