import { createContext } from "react";
import { IScoreContextType } from "shared/types/inderfaces";

export enum AppRoute {
  MAIN = "/",
  FEEDBACK = "/feed",
  GREETINGS = "/greetings",
  NOTIFICATION = "/notify",
  NOT_FOUND = "*",
}

export const FINISH_FLAG = "isFinish";

export const ScoreContext = createContext<IScoreContextType | null>(null);
