import { FC, memo } from "react";
import styles from "./RatingButton.module.scss";
import { IRatingButton } from "shared/types/inderfaces";

const RatingButton: FC<IRatingButton> = memo(
  ({ id, name, title, ...props }) => {
    const dataAttr = { "data-title": title };

    return (
      <>
        <input
          className={styles.radio}
          id={id}
          name={name}
          type="radio"
          value={title}
          {...props}
        />
        <label className={styles.label} htmlFor={id} {...dataAttr} />
      </>
    );
  }
);

export { RatingButton };
