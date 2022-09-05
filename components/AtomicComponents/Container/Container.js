import s from "./Container.module.css";

export const MyContainer = ({ style = {}, ...props }) => {
  return <div className={s.container} {...props} />;
};
