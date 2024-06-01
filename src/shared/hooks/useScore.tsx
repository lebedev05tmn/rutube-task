import { useContext } from "react";
import { ScoreContext } from "shared/config";

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useCore must be used within a ScoreProvider");
  }
  return context;
};
