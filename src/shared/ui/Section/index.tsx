import { FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Section.module.scss";

const Section: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
}) => <section className={styles.Section}>{children}</section>;

export { Section };
