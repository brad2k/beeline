import clsx from "clsx";
import Heading, { HeadingProps } from "@/app/components/ui/Heading";
import styles from "./card.module.css";

type CardAsProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>; // This merges props of the 'as' element

function Card<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: CardAsProps<T>) {
  const Component = as || "div";
  return <Component className={clsx(styles.root, className)} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={clsx(className)} {...props} />;
}

function CardTitle({
  className,
  headingLevel = "h3",
  styleAs,
  ...props
}: React.ComponentProps<"div"> & {
  headingLevel?: Extract<HeadingProps["headingLevel"], "h2" | "h3" | "h4">;
  styleAs?: Extract<HeadingProps["styleAs"], "h2" | "h3" | "h4">;
}) {
  return (
    <Heading
      className={clsx(className)}
      headingLevel={headingLevel}
      styleAs={styleAs}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={clsx(className)} {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={clsx(className)} {...props} />;
}

function CardContent<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: CardAsProps<T>) {
  const Component = as || "div";
  return <Component className={clsx(className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={clsx(className)} {...props} />;
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
