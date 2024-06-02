import { FC, PropsWithChildren, useState } from "react";
import { QuestionResultContext, ScoreContext } from "shared/config";
import { IQuestionResult } from "shared/types/interfaces";

const AppContext: FC<PropsWithChildren> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [questionResult, setQuestionResult] = useState<IQuestionResult[]>([]);

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
