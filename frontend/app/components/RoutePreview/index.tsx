import Layout from "@/app/components/Layout";
import { buttonStyles } from "@/app/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import clsx from "clsx";
import { SquareArrowRight } from "lucide-react";
import { Image } from "next-sanity/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import type { Route as RouteType } from "@/app/lib/sanity";
import Badge from "../ui/Badge";
import styles from "./routePreview.module.css";

type RoutePreviewProps = {
  as?: React.ElementType;
  route: RouteType;
  className?: string;
};

export default function RoutePreview({
  route: r,
  className,
  ...props
}: RoutePreviewProps) {
  return (
    <Card className={clsx(styles.root, className)} {...props}>
      <CardHeader className={styles.header}>
        <CardTitle headingLevel="h3" styleAs="h4">
          <Link href={`/routes/${r.slug.current}`}>{r.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent as={Layout} flow className={styles.content}>
        <dl className={clsx(styles.stats, "grid")}>
          <dt>Distance</dt>
          <dd>
            <b>{r.distance.toLocaleString("en-US")}</b>
          </dd>
          <dt>Elevation</dt>
          <dd>
            <b>{r.elevation.toLocaleString("en-US")}</b>
          </dd>
          <dt>Difficulty</dt>
          <dd>
            <Badge className={styles.difficulty}>{r.difficulty}</Badge>
          </dd>
        </dl>

        <Image
          src={urlFor(r.image).width(580).height(384).url()}
          alt={`Map depicting the ${r.title} bicycle route`}
          width={580}
          height={384}
          className={styles.image}
        />

        <p>{r.summary}</p>
      </CardContent>
      <CardFooter className={styles.footer}>
        <Link
          className={buttonStyles("primary")}
          href={`/routes/${r.slug.current}`}
        >
          Route details <SquareArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
