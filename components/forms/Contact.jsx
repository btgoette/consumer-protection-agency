// React Components
// import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
  return (
    <form
      className="contact-form"
      id="contactForm"
      method="POST"
      action="https://forms.ontraport.com/v2.4/form_processor.php?"
      accept-charset="UTF-8"
    >
      <fieldset>
        <label for="firstname">First Name<span className="required">*</span></label>
        <input
          aria-label="First Name"
          type="text"
          name="firstname"
          pattern="[a-zA-Z][a-zA-Z ]+"
          id="contact-first-name"
          required
        />
      </fieldset>

      <fieldset>
        <label for="email">Email<span className="required">*</span></label>
        <input
          aria-label="Email"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          id="contact-email"
          required
        />
      </fieldset>

      <fieldset>
        <label for="office_phone">Office Phone<span className="required">*</span></label>
        <input
          aria-label="Office Phone"
          type="tel"
          name="office_phone"
          pattern="[0-9]{10}"
          id="contact-phone"
          required
        />
      </fieldset>

      <fieldset>
        <label for="f1794">Comment</label>
        <textarea
          aria-label="Comment"
          name="f1794"
          id="contact-comment"
        ></textarea>
      </fieldset>

      <fieldset className="text-center">
        <input
          type="submit"
          name="submit-button"
          value="Submit"
          id="contact-submit"
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
      <input name="uid" type="hidden" value="p2c240683f3" />
      <input name="uniquep2c240683f3" type="hidden" value="0" />
      <input
        name="mopsbbk"
        type="hidden"
        value="9D2A6228D46D85C764405CC7:1B1D4E78CFD9596BEB81B77E"
      />
      <input
        name="mopbelg"
        type="hidden"
        value="0150428:70C2E1FB3BBDB90EC287A65A:B1BB45C5C1EE4DD90C541B40"
      />
    </form>
  );
}
