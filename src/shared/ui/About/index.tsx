import { FC } from "react";
import { IAbout } from "shared/interfaces/interfaces";

import styles from "./About.module.scss";

const About: FC<IAbout> = ({ title, description }) => (
  <>
    <h1 className={styles.Title}>{title}</h1>
    <p
      className={styles.Description}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </>
);

export { About };
