import { useEffect } from "react";
import { useScore } from "shared/hooks/useScore";
import { useQuestionResult } from "shared/hooks/useQuestionResult";
import { IQuestionResult } from "shared/interfaces/interfaces";

const useData = () => {
  const { score } = useScore();
  const { questionResult } = useQuestionResult();

  useEffect(() => {
    console.log("Оценка = ", score);
    questionResult.map((question: IQuestionResult) => {
      console.log(JSON.stringify(question));
    });
  }, [score, questionResult]);
};

export default useData;
