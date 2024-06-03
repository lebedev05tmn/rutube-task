import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

const Button: FC<
  PropsWithChildren<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & { href?: string }
  >
> = ({ children, ...props }) =>
  props?.href ? (
    <a className={styles.Button} href={props.href}>
      {children}
    </a>
  ) : (
    <button className={styles.Button} type="submit" {...props}>
      {children}
    </button>
  );

export { Button };
