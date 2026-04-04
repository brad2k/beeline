import clsx from "clsx";
import styles from "./heading.module.css";
import { ReactNode } from "react";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  emphasize?: boolean;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  styleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

export default function Heading({
  className,
  emphasize,
  headingLevel = "h2",
  styleAs,
  ...props
}: HeadingProps): ReactNode {
  const Heading = headingLevel;
  return (
    <Heading
      className={clsx(
        className,
        styles[headingLevel],
        styleAs ? styles[styleAs] : styles[headingLevel],
        emphasize && styles.emphasize,
      )}
      {...props}
    />
  );
}
