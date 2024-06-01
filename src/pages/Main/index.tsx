import { FC } from "react";
import Score from "widgets/Score";
import { Decoration } from "shared/ui";

const Main: FC = () => {
  return (
    <>
      <Decoration
        src="https://i.postimg.cc/zX7kBpCv/image.png"
        width={455.36}
      />
      <Score />
    </>
  );
};

export default Main;
