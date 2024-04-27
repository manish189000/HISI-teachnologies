import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm1() {
  const [state, handleSubmit] = useForm("mleqzrnp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      className="bg-[black]"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mleqzrnp"
      method="POST"
    >
      <label className="text-white" htmlFor="email">
        Email Address
      </label>
      <input className="text-white" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="text-white" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="text-white" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm1;
