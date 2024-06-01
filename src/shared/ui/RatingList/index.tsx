import { FC, PropsWithChildren } from "react";
import styles from "./RatingList.module.scss";

const RatingList: FC<PropsWithChildren> = ({ children }) => (
  <fieldset className={styles.fieldset}>
    <legend className={styles.legend}>Оценка</legend>
    {children}
  </fieldset>
);

export { RatingList };
