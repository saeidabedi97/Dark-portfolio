import {
  Button,
  Heading2,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../FormSection/FormSection.module.scss";
import st from "../../../styles/section.module.scss";

function ContactForm() {
  return (
    <section className={st.section}>
      <Heading2 className={st.section__heading}>Contact me</Heading2>
      <form className={s.form__section__form}>
        <label htmlFor="fname" className={s.form__section__form__label}>
          First name:
        </label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="Email" className={s.form__section__form__label}>
          Email:
        </label>
        <br />
        <input type="text" id="Email" name="Email" />
        <br />
        <label htmlFor="RFC" className={s.form__section__form__label}>
          Reason for contacting
        </label>
        <br />
        <input type="text" id="RFC" name="RFC" />
        <br />
        <Button className={s.form__section__form__button}>Submit</Button>
      </form>
    </section>
  );
}

export default ContactForm;
