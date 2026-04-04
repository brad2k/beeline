import clsx from "clsx";
import styles from "./button.module.css";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: string;
  variant?: "primary" | "secondary";
};

const buttonClasses = {
  base: styles.root,
  variants: {
    primary: styles.primary,
    secondary: styles.secondary,
  },
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonClasses.base,
        buttonClasses.variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function buttonStyles(variant: ButtonProps["variant"] = "primary") {
  return clsx(buttonClasses.base, buttonClasses.variants[variant]);
}
