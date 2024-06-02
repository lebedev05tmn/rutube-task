import { FC } from "react";
import { FormDecoration } from "shared/ui";
import FeedbackForm from "widgets/FeedbackForm";

const Feedback: FC = () => {
  return (
    <>
      <h1 style={{ display: "none" }}>Обратная связь</h1>
      <FormDecoration src="https://i.postimg.cc/L51HGdCQ/image-1.png" />
      <FeedbackForm />
    </>
  );
};

export default Feedback;
