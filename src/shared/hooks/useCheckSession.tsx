import { useState, useEffect } from "react";

const useCheckSession = (key: string) => {
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    const value: string | null = sessionStorage.getItem(key);
    value && setFlag(JSON.parse(value || "") as boolean);
  }, [key]);

  return flag;
};

export default useCheckSession;
