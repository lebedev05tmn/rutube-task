import { FC, memo } from "react";
import { IRatingButton } from "shared/interfaces/interfaces";

import styles from "./RatingButton.module.scss";

const RatingButton: FC<IRatingButton> = memo(({ id, title, ...props }) => {
  const dataAttr = { "data-title": title };

  return (
    <>
      <input className={styles.radio} type="radio" id={id} {...props} />
      <label className={styles.label} htmlFor={id} {...dataAttr} />
    </>
  );
});

export { RatingButton };
