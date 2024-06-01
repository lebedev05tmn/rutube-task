import { FC, ImgHTMLAttributes } from "react";
import styles from "./Decoration.module.scss";

const Decoration: FC<ImgHTMLAttributes<HTMLImageElement>> = props => (
  <section className={styles.Container} id="decoration">
    <img className={styles.Image} {...props} />
  </section>
);
export { Decoration };
