import { FC, ImgHTMLAttributes } from "react";
import styles from "./FormDecoration.module.scss";

const FormDecoration: FC<ImgHTMLAttributes<HTMLImageElement>> = props => (
  <section className={styles.Container} id="decoration">
    <img className={styles.FormDecoration} {...props} />
  </section>
);

export { FormDecoration };
