import { useContext } from "react";
import { QuestionResultContext } from "shared/config";

export const useQuestionResult = () => {
  const context = useContext(QuestionResultContext);
  if (!context) {
    throw new Error("Хук должен изпользоваться в QuestionResultContext");
  }
  return context;
};
