import { FC } from "react";
import { Button } from "shared/ui";
import { IQuestionAnswer } from "shared/types/interfaces";
import { questionsData } from "entities/Questions";
import FormRadio from "features/FormRadio";

import styles from "./FeedbackForm.module.scss";

const FeedbackForm: FC = () => {
  const dataAttr = { "data-type": "form" };
  return (
    <form className={styles.FeedbackForm}>
      {questionsData.map((question: IQuestionAnswer, index: number) => (
        <FormRadio
          key={question.questionID}
          id={index}
          title={`${index + 1}. ${question.text}`}
          type={question.type}
          variants={question.variants}
          minScale={question.min_scale}
          maxScale={question.max_scale}
        />
      ))}
      <Button {...dataAttr}>Отправить ответы</Button>
    </form>
  );
};

export default FeedbackForm;
