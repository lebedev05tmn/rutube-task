import { FC } from "react";
import { About } from "shared/ui";
import Rating from "features/Rating";

import styles from "./Score.module.scss";

const Score: FC = () => (
  <section className={styles.Score}>
    <About
      title="Уважаемый клиент!"
      description="Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда и 9 — «Отлично»."
    />
    <Rating />
  </section>
);

export default Score;
