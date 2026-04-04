import Layout from "@/app/components/Layout";
import RouteList from "@/app/components/RouteList";
import Heading from "@/app/components/ui/Heading";
import PageWrapper from "@/app/components/PageWrapper";
import { getRoutes } from "@/app/lib/sanity";
import styles from "@/app/page.module.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Beeline — road biking routes in San Francisco",
  description:
    "A collection of awesome road biking routes in and out of San Francisco.",
};

export default async function Home() {
  const routes = await getRoutes();
  return (
    <PageWrapper pageType="home">
      <Layout
        as="main"
        context="wrapper"
        flow
        className={clsx(styles.root, "homepage")}
      >
        <Heading headingLevel="h1" emphasize>
          Let’s ride!
        </Heading>

        <Suspense fallback={<p>Loading routes…</p>}>
          <RouteList routes={routes} />
        </Suspense>
      </Layout>
    </PageWrapper>
  );
}
