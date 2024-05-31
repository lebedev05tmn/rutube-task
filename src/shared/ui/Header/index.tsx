import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <section className={styles.HeaderSection} id="link">
        <a href="https://rutube.ru" target="_blank">
          <img
            width="148"
            height="40"
            src="https://svgshare.com/i/16eN.svg"
            alt="Rutube"
            title="Rutube"
          />
        </a>
      </section>
    </header>
  );
};

export { Header };
