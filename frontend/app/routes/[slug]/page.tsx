import PageWrapper from "@/app/components/PageWrapper";
import Layout from "@/app/components/Layout";
import Heading from "@/app/components/ui/Heading";
import { getRoute, getRoutes } from "@/app/lib/sanity";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import StravaEmbed from "./components/StravaEmbed";
import Badge from "@/app/components/ui/Badge";
import styles from "./route.module.css";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const routes = await getRoutes();
  return routes.map((route) => ({ slug: route.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = await getRoute(slug);

  if (!route) return {};

  return {
    title: `${route?.title} — San Francisco bike route`,
    description: route?.summary,
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = await getRoute(slug);

  if (!route) notFound();

  return (
    <PageWrapper>
      <Layout as="main" context="wrapper" flow>
        <Heading headingLevel="h1">{route.title}</Heading>
        <ul className={styles.tags}>
          <Badge variant="secondary">{route.difficulty}</Badge>
          {route.tags?.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </ul>
        <PortableText value={route.description} />
        <StravaEmbed routeId={route.stravaRouteId} />
      </Layout>
    </PageWrapper>
  );
}
