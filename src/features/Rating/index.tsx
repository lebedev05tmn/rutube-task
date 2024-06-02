import { useCallback, ChangeEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { RatingButton, RatingList } from "shared/ui";
import { useScore } from "shared/hooks/useScore";
import { AppRoute, SCORED_FLAG, SCORE_SCALE } from "shared/config";

import styles from "./Score.module.scss";

const Rating = () => {
  const { setScore } = useScore();
  const [isScored, setIsScored] = useState<boolean>(
    JSON.parse(sessionStorage.getItem(SCORED_FLAG) || "false")
  );

  const handleRating = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setScore(Number(e.target.value));
      sessionStorage.setItem(SCORED_FLAG, "true");
      setIsScored(true);
    },
    [setScore, setIsScored]
  );

  if (isScored) return <Navigate to={AppRoute.FEEDBACK} />;

  return (
    <form className={styles.Score} id="score">
      <RatingList>
        {Array(SCORE_SCALE)
          .fill("")
          .map((_, index: number) => {
            const id: string = `score-${index}`;
            return (
              <RatingButton
                id={id}
                key={id}
                name="score"
                value={index}
                title={index.toString()}
                onChange={handleRating}
              />
            );
          })}
      </RatingList>
      <span className={styles.Caption}>Хуже некуда</span>
      <span className={styles.Caption}>Отлично</span>
    </form>
  );
};

export default Rating;
