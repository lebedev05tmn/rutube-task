import { FC } from "react";
import { Decoration, Section, Button, About } from "shared/ui";
import { PLATFORM_LINK } from "shared/config";

const Notification: FC = () => (
  <>
    <Decoration src="https://i.postimg.cc/T27bj4BM/image-3.png" />
    <Section id="notify">
      <About
        title="Вы уже прошли этот опрос"
        description="Спасибо, что делитесь мнением<br /> и помогаете нам быть лучше"
      />
      <Button href={PLATFORM_LINK}>Перейти на RUTUBE</Button>
    </Section>
  </>
);

export default Notification;
