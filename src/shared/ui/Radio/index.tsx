import { FC, memo } from "react";
import styles from "./RatingButton.module.scss";
import { IRatingButton } from "shared/types/interfaces";

const RadioButton: FC<IRatingButton> = memo(({ id, title, ...props }) => {
  const dataAttr = { "data-title": title };

  return (
    <>
      <input className={styles.radio} type="radio" id={id} {...props} />
      <label className={styles.label} htmlFor={id} {...dataAttr} />
    </>
  );
});

export { RadioButton };
