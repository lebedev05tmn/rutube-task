import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

const Button: FC<
  PropsWithChildren<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">>
> = ({ children, ...props }) => (
  <button className={styles.Button} type="submit" {...props}>
    {children}
  </button>
);

export { Button };
