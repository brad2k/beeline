import Layout from "@/app/components/Layout";
import { buttonStyles } from "@/app/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import { SquareArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./infoCard.module.css";

export default function InfoCard() {
  return (
    <Card className={styles.root} as="li">
      <CardHeader className={styles.header}>
        <CardTitle headingLevel="h2" styleAs="h3">
          Where to begin?
        </CardTitle>
      </CardHeader>
      <CardContent as={Layout} flow className={styles.body}>
        <Layout as="blockquote" flow className={styles.quote}>
          <p>Dear sir,</p>
          <p>
            This is cute and all, but I need more info before I embark on this
            wild goose chase.
          </p>
          <p>
            Signed,
            <br />
            The Cyclists
          </p>
        </Layout>

        <p>Never fear!</p>
      </CardContent>
      <CardFooter>
        <Link
          className={buttonStyles("secondary")}
          href="/biking-in-san-francisco"
        >
          Tell me more <SquareArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
