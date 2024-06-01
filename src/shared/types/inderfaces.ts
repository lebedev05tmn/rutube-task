import { InputHTMLAttributes, Dispatch, SetStateAction } from "react";

export interface IAbout {
  title: string;
  description: string;
}

export interface IRatingButton
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "id" | "name" | "value"
  > {
  id: string;
  name: string;
  title: string;
}

export interface IQuestionResult {
  questionID: number;
  responseID: number;
}

export interface IScoreContextType {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}
