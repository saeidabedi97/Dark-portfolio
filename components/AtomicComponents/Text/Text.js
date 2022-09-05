import s from "./Text.module.css";
import { BaseType } from "./TextTypes";

const SCALE_TO_CLASS = {
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
  heading4: "heading4",
  heading5: "heading5",
  pLarge: "pLarge",
  pMedium: "pMedium",
  pSmall: "pSmall",
  sectionTitle: "sectionTitle",
  button: "button",
};

const Base = ({
  as: Component = "p",
  scale = "body",
  children,
  className,
  ...props
}) => {
  const classNames = [s[SCALE_TO_CLASS[`${scale}`]], className];
  return (
    <Component {...props} className={classNames.join(" ")}>
      {children}
    </Component>
  );
};

export const Heading1 = (props) => <Base as="h1" scale="heading1" {...props} />;

export const Heading2 = (props) => <Base as="h2" scale="heading2" {...props} />;

export const Heading3 = (props) => <Base as="h3" scale="heading3" {...props} />;

export const Heading4 = (props) => <Base as="h4" scale="heading4" {...props} />;
export const Heading5 = (props) => <Base as="h5" scale="heading5" {...props} />;

export const PLarge = (props) => <Base as="p" scale="pLarge" {...props} />;

export const PMedium = (props) => <Base as="p" scale="pMedium" {...props} />;

export const PSmall = (props) => <Base as="p" scale="pSmall" {...props} />;

export const SectionTitle = (props) => (
  <Base as="p" scale="sectionTitle" {...props} />
);

export const Button = (props) => <Base as="button" scale="button" {...props} />;
