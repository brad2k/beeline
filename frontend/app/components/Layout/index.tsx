import clsx from "clsx";
import styles from "./layout.module.css";

type LayoutProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  className?: string;
  context?: "wrapper" | "content";
  flow?: boolean;
  prose?: boolean;
  variant?: "full";
};

export default function Layout({
  as = "div",
  className,
  context,
  prose,
  flow,
  variant,
  ...rest
}: LayoutProps) {
  const Component = as;
  return (
    <Component
      className={clsx(
        className,
        context && styles[context],
        flow && styles.flow,
        prose && styles.prose,
        variant && styles[variant],
      )}
      {...rest}
    />
  );
}
