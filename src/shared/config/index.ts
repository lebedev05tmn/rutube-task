import { createContext } from "react";
import {
  IQuestionResultContextType,
  IScoreContextType,
} from "shared/interfaces/interfaces";

export enum AppRoute {
  MAIN = "/",
  FEEDBACK = "/feed",
  GREETINGS = "/greetings",
  NOTIFICATION = "/notify",
  NOT_FOUND = "*",
}

export enum RadioTypes {
  RADIO = "radio",
  SCORE = "score",
}

export const PLATFORM_LINK = "https://rutube.ru";

export const FINISH_FLAG = "isFinish";

export const SCORED_FLAG = "isScored";

export const QUESTION_RESULT = "questionResult";

export const SCORE_SCALE = 10;

export const ScoreContext = createContext<IScoreContextType | null>(null);

export const QuestionResultContext =
  createContext<IQuestionResultContextType | null>(null);
