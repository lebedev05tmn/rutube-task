import { InputHTMLAttributes, Dispatch, SetStateAction } from "react";

export interface IAbout {
  title: string;
  description: string;
}

export interface IRatingButton
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "id"> {
  title: string;
  id: string;
}

export interface IQuestionResult {
  questionID: number;
  responseID: number;
}

export interface IScoreContextType {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export interface IQuestionResultContextType {
  questionResult: IQuestionResult[];
  setQuestionResult: Dispatch<SetStateAction<IQuestionResult[]>>;
}

export interface IQuestionVariant {
  text: string;
  responseId: number;
}

export interface IQuestionAnswer {
  text: string;
  questionID: number;
  type: "radio" | "score";
  variants?: IQuestionVariant[];
  min_scale?: number;
  max_scale?: number;
}
