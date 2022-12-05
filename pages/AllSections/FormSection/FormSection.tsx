import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Button,
  Heading2,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../FormSection/FormSection.module.scss";
import st from "../../../styles/section.module.scss";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzhcvwj",
        "contact_form",
        form.current,
        "CqVnbmFCdLuHh4xc_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const [errMessage, setErrMessage] = useState("");
  const [submitText, setSubmitText] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setErrMessage("Thank you");
    } else {
      setErrMessage("Please, enter valid Email!");
    }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.section
      className={st.section}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Heading2 className={st.section__heading}>Contact me</Heading2>
      <form className={s.form__section__form} ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="fname" className={s.form__section__form__label}>
            First name:
          </label>
          <input type="text" id="fname" name="user_name" />
        </div>
        <div>
          <label htmlFor="Email" className={s.form__section__form__label}>
            Email:
          </label>
          <input
            type="email"
            id="Email"
            name="user_email"
            onChange={(e) => validateEmail(e)}
          />
          <span style={{ color: "red" }}>{errMessage}</span>
        </div>
        <div>
          <label htmlFor="RFC" className={s.form__section__form__label}>
            Reason for contacting
          </label>
          <textarea
            id="RFC"
            name="message"
            style={{ height: "235px", width: "200px" }}
          />
        </div>
        <div>
          <input
            type="submit"
            className={s.form__section__form__button}
            value="send"
            style={{
              backgroundColor: "orange",
              color: "whitesmoke",
            }}
            onClick={() => setSubmitText(true)}
          />
          {submitText && (
            <span style={{ color: "green" }}>
              Thank you for submitting your request
            </span>
          )}
        </div>
      </form>
    </motion.section>
  );
}

export default ContactForm;
