import {
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";

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
  responseID: number;
}

export interface IQuestionAnswer {
  text: string;
  questionID: number;
  type: "radio" | "score";
  variants?: IQuestionVariant[];
  min_scale?: number;
  max_scale?: number;
}

export interface IRadio {
  title: string;
  type: string;
  variants?: IQuestionVariant[];
  minScale?: number;
  maxScale?: number;
  id: number;
  onChange?: Dispatch<ChangeEvent<HTMLInputElement>>;
  question?: IQuestionResult;
}
