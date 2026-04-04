"use client";

import RoutePreview from "@/app/components/RoutePreview";
import Button from "@/app/components/ui/Button";
import type { Route as RouteType } from "@/app/lib/sanity";
import styles from "./routeList.module.css";
import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import InfoCard from "./InfoCard";

function SubnavBar({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: RouteType["area"];
  setActiveFilter: (filter: RouteType["area"]) => void;
}) {
  return (
    <ul className={styles.subnav}>
      <li>
        <Button
          variant={activeFilter === "all" ? "primary" : "secondary"}
          onClick={() => setActiveFilter("all")}
        >
          Everywhere
        </Button>
      </li>
      <li>
        <Button
          variant={activeFilter === "sf" ? "primary" : "secondary"}
          onClick={() => setActiveFilter("sf")}
        >
          San Francisco
        </Button>
      </li>
      <li>
        <Button
          variant={activeFilter === "north" ? "primary" : "secondary"}
          onClick={() => setActiveFilter("north")}
        >
          North Bay
        </Button>
      </li>
      <li>
        <Button
          variant={activeFilter === "south" ? "primary" : "secondary"}
          onClick={() => setActiveFilter("south")}
        >
          To the South
        </Button>
      </li>
    </ul>
  );
}

export default function RouteList({ routes }: { routes: RouteType[] }) {
  // const [activeFilter, setActiveFilter] = useState<RouteType["area"]>("sf");

  const searchParams = useSearchParams();
  const router = useRouter();
  const activeFilter = (searchParams.get("area") as RouteType["area"]) || "sf";

  const setActiveFilter = (filter: RouteType["area"]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("area", filter);
    router.replace(`?${params.toString()}`);
  };

  const filteredRoutes = useMemo(
    () =>
      activeFilter === "all"
        ? routes
        : routes.filter((route) => route.area === activeFilter),
    [routes, activeFilter],
  );

  return (
    <>
      <SubnavBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {filteredRoutes.length === 0 ? (
        <p>No routes yet — that’s weird…!</p>
      ) : (
        <ul className={styles.routeList}>
          <InfoCard />
          {filteredRoutes.map((route: RouteType) => (
            <RoutePreview
              as="li"
              key={route._id}
              className={styles.route}
              route={route}
            />
          ))}
        </ul>
      )}
    </>
  );
}
