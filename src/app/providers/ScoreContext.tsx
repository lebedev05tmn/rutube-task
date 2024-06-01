import { FC, PropsWithChildren, useState } from "react";
import { ScoreContext } from "shared/config";

const AppContext: FC<PropsWithChildren> = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default AppContext;
