import { FC, PropsWithChildren, useState } from "react";
import {
  QuestionResultContext,
  ScoreContext,
  QUESTION_RESULT,
} from "shared/config";
import { IQuestionResult } from "shared/interfaces/interfaces";

const AppContext: FC<PropsWithChildren> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [questionResult, setQuestionResult] = useState<IQuestionResult[]>(
    JSON.parse(sessionStorage.getItem(QUESTION_RESULT) || "[]")
  );

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <QuestionResultContext.Provider
        value={{ questionResult, setQuestionResult }}>
        {children}
      </QuestionResultContext.Provider>
    </ScoreContext.Provider>
  );
};

export default AppContext;
