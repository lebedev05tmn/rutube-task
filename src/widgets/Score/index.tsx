import { FC } from "react";
import { About, Section } from "shared/ui";
import Rating from "features/Rating";

const Score: FC = () => (
  <Section>
    <About
      title="Уважаемый клиент!"
      description="Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0<br /> является «Хуже некуда и 9 — «Отлично»."
    />
    <Rating />
  </Section>
);

export default Score;
