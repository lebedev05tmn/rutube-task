import { useCallback, ChangeEvent, useState } from "react";
import { RatingButton, RatingList } from "shared/ui";
import styles from "./Score.module.scss";
import { useScore } from "shared/hooks/useScore";
import { Navigate } from "react-router-dom";
import { AppRoute } from "shared/config";

const Rating = () => {
  const { setScore } = useScore();
  const [isScored, setIsScored] = useState<boolean>(
    JSON.parse(sessionStorage.getItem("isScored") || "false")
  );

  const handleRating = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setScore(Number(e.target.value));
      sessionStorage.setItem("isScored", "true");
      setIsScored(true);
    },
    [setScore, setIsScored]
  );

  if (isScored) return <Navigate to={AppRoute.FEEDBACK} />;

  return (
    <section className={styles.Score} id="score">
      <RatingList>
        {Array(10)
          .fill("")
          .map((_, index: number) => {
            const id: string = `score-${index}`;
            return (
              <RatingButton
                id={id}
                key={id}
                name="score"
                title={String(index)}
                onChange={handleRating}
              />
            );
          })}
      </RatingList>
      <span className={styles.Caption}>Хуже некуда</span>
      <span className={styles.Caption}>Отлично</span>
    </section>
  );
};

export default Rating;
