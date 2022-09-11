import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Button,
  Heading2,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../FormSection/FormSection.module.scss";
import st from "../../../styles/section.module.scss";
import { useEffect } from "react";

function ContactForm() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

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
      transition={{ duration: 1 }}
    >
      <Heading2 className={st.section__heading}>Contact me</Heading2>
      <form className={s.form__section__form}>
        <div>
          <label htmlFor="fname" className={s.form__section__form__label}>
            First name:
          </label>
          <input type="text" id="fname" name="fname" />
        </div>
        <div>
          <label htmlFor="Email" className={s.form__section__form__label}>
            Email:
          </label>
          <input type="email" id="Email" name="Email" />
        </div>
        <div>
          <label htmlFor="RFC" className={s.form__section__form__label}>
            Reason for contacting
          </label>
          <input type="text" id="RFC" name="RFC" />
        </div>
        <div>
          <Button className={s.form__section__form__button}>Submit</Button>
        </div>
      </form>
    </motion.section>
  );
}

export default ContactForm;
