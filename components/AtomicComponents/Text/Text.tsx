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
};

const Base: BaseType = ({
  as: Component = "p",
  scale = "body",
  children,
  className,
  ...props
}) => (
  <Component {...props} className={s[SCALE_TO_CLASS[`${scale}`]]}>
    {children}
  </Component>
);

export const Heading1: BaseType = (props) => (
  <Base as="h1" scale="heading1" {...props} />
);

export const Heading2: BaseType = (props) => (
  <Base as="h2" scale="heading2" {...props} />
);

export const Heading3: BaseType = (props) => (
  <Base as="h3" scale="heading3" {...props} />
);

export const Heading4: BaseType = (props) => (
  <Base as="h4" scale="heading4" {...props} />
);
export const Heading5: BaseType = (props) => (
  <Base as="h5" scale="heading5" {...props} />
);

export const PLarge: BaseType = (props) => (
  <Base as="p" scale="pLarge" {...props} />
);

export const PMedium: BaseType = (props) => (
  <Base as="p" scale="pMedium" {...props} />
);

export const PSmall: BaseType = (props) => (
  <Base as="p" scale="pSmall" {...props} />
);

export const SectionTitle: BaseType = (props) => (
  <Base as="p" scale="sectionTitle" {...props} />
);
