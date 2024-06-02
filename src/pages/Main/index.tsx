import { FC } from "react";
import Score from "widgets/Score";
import { Decoration } from "shared/ui";

const Main: FC = () => {
  const dataAttr = { "data-type": "main" };
  return (
    <>
      <Decoration src="https://i.postimg.cc/zX7kBpCv/image.png" {...dataAttr} />
      <Score />
    </>
  );
};

export default Main;
