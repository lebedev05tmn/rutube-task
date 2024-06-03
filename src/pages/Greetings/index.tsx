import { FC } from "react";
import useData from "features/useData";
import { About, Button, Decoration, Section } from "shared/ui";
import { PLATFORM_LINK } from "shared/config";
const Greetings: FC = () => {
  useData();
  return (
    <>
      <Decoration src="https://i.postimg.cc/5y3G8y1J/image-2.png" />
      <Section id="greetings">
        <About
          title="Спасибо за обратную связь!"
          description="Это поможет нам улучшить сервис"
        />
        <Button href={PLATFORM_LINK}>Перейти на платформу</Button>
      </Section>
    </>
  );
};

export default Greetings;
