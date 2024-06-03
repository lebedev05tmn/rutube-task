import { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "shared/ui";
import { IQuestionAnswer, IQuestionResult } from "shared/interfaces/interfaces";
import { useQuestionResult } from "shared/hooks/useQuestionResult";
import { getArrWithLastDuplicate } from "shared/utils";
import { QUESTION_RESULT, FINISH_FLAG, AppRoute } from "shared/config";
import { questionsData } from "entities/Questions";
import FormRadio from "features/FormRadio";

import styles from "./FeedbackForm.module.scss";

const FeedbackForm: FC = () => {
  const dataAttr = { "data-type": "form" };
  const { questionResult, setQuestionResult } = useQuestionResult();

  const [flag, setFlag] = useState(false);

  if (flag) return <Navigate to={AppRoute.GREETINGS} />;

  return (
    <form className={styles.FeedbackForm}>
      <p className={styles.title}>
        Пожалуйста, ответьте на дополнительные вопросы.
      </p>
      {questionsData.map((question: IQuestionAnswer, index: number) => (
        <FormRadio
          key={question.questionID}
          id={index}
          title={`${index + 1}. ${question.text}`}
          type={question.type}
          question={questionResult.find(
            (q: IQuestionResult) => q.questionID === question.questionID
          )}
          onChange={e => {
            const result: IQuestionResult = {
              questionID: Number(question.questionID),
              responseID: Number(e.target.value),
            };
            const questionResultArr: IQuestionResult[] = questionResult.length
              ? getArrWithLastDuplicate(
                  [...questionResult, result].sort(
                    (a, b) => a.questionID - b.questionID
                  ),
                  "questionID"
                )
              : [result];
            setQuestionResult(questionResultArr);
            sessionStorage.setItem(
              QUESTION_RESULT,
              JSON.stringify(questionResultArr)
            );
          }}
          variants={question.variants}
          minScale={question.min_scale}
          maxScale={question.max_scale}
        />
      ))}
      <Button
        {...dataAttr}
        onClick={() => {
          setFlag(true);
          sessionStorage.setItem(FINISH_FLAG, "true");
        }}>
        Отправить ответы
      </Button>
    </form>
  );
};

export default FeedbackForm;
