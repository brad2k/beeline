import clsx from "clsx";
import styles from "./badge.module.css";

type BadgeProps = React.ComponentProps<"span"> & {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
};

export default function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(styles.root, styles[variant], className)}
      {...props}
    />
  );
}
