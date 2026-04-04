import Layout from "@/app/components/Layout";
import PageWrapper from "@/app/components/PageWrapper";
import Heading from "@/app/components/ui/Heading";
import { SquareArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { buttonStyles } from "../components/ui/Button";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Biking in San Francisco — a primer",
  description:
    "A beginner’s guide to cycling in San Francisco, covering everything a newcomer needs to know before hitting the streets, including a regional overview of riding in SF, the North Bay (Marin County), and south along the Peninsula.",
};

export default function BikingInSF() {
  return (
    <PageWrapper>
      <Layout as="main" context="wrapper" prose flow>
        <Heading headingLevel="h1" emphasize>
          Biking in San Francisco
        </Heading>

        <p>
          Biking in San Francisco can seem intimidating with its famously narrow
          streets winding their way up, down, and around a seemingly endless
          number of hills. In reality, San Francisco—or “the City” as it is
          locally known—is quite small and manageable, famous for its petite 7
          <abbr title="miles">mi</abbr> &times; 7<abbr title="miles">mi</abbr>{" "}
          stature. Sure, 40+ hills sounds like a lot, but you can embrace or
          work around the hills with a bit of planning. No matter your riding
          style, San Francisco has something for everyone.
        </p>

        <Heading>What&apos;s the biking scene?</Heading>

        <p>
          San Francisco is home to a thriving bike scene and an extensive
          network of bike routes. Many people use their bikes as a daily
          getaround when commuting, running errands, or just meeting up with
          friends. We also have a thriving contingent of recreational cyclists
          who hit the pavement for long-distance rides, most often in Marin
          County, but sometimes along the Peninsula.
        </p>

        <Heading>Navigating the streets</Heading>

        <p>
          San Francisco’s streets can be pretty weird: they wind all over the
          place, intersections don’t always align, street names change
          constantly, and many streets are a little narrow for comfort. Enter
          the bike network, which is specifically designed to help cyclists
          navigate the madness from point A to point B as safely and easily as
          possible.
        </p>

        <p>
          Dedicated side-running bike lanes are the most common for the major
          cycling routes, but cyclists and cars have to share space on smaller
          streets, which are marked by “sharrows” painted on green boxes along
          the roadway. Some areas, such as Golden Gate Park, the Presidio,
          Crissy Field, and Sunset Dunes have dedicated cycling paths completely
          separated from cars—though not typically separated from pedestrians.
        </p>

        <p>
          <strong>
            A general rule of thumb: use{" "}
            <a href="https://www.google.com/maps" rel="external noopener">
              Google Maps
            </a>
          </strong>
          , which already knows the bike network and can plan an efficient route
          that keeps you in bike-friendly territory and even includes an
          elevation profile.
        </p>

        <p>
          A further bit of advice:{" "}
          <strong>
            if you don‘t see a bike lane, you probably shouldn’t be there
          </strong>
          —especially if it‘s a busy road. Drivers are accustomed to seeing
          cyclists in some places, but not others; in the interest of safety, do
          yourself a favor and find the proper path.
        </p>

        <p>Resources:</p>
        <ul>
          <li>
            <a
              href="https://www.sfmta.com/maps/san-francisco-bike-network-map"
              rel="external noopener"
            >
              San Francisco Bike Network Map
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps" rel="external noopener">
              Google Maps
            </a>
          </li>
        </ul>

        <Heading>Train tracks: a warning</Heading>

        {/* <Figure caption="Train tracks: a menace to cyclists">
        <Image
          src="/tracks.jpg"
          alt="A red San Francisco cable car with tracks disappearing into the distance"
          height={1365}
          width={2048}
        />
      </Figure> */}

        <p>
          Beware of train tracks! A dubious rite of passage for any San
          Francisco cyclist, getting taken down by train tracks is not a good
          time and can be easily avoided by crossing the tracks at a
          perpendicular angle to the track.
        </p>

        <Heading>Bike parking</Heading>

        <p>
          Always lock up your bike in San Francisco. This is a big city, so
          let’s just be safer rather than sorry, eh? There are bike racks all
          over the city and plentiful parking meters and street signs make
          excellent backups.
        </p>

        <p>
          You can generally get away with leaving your bike unlocked while
          dashing into a cafe or restaurant in Marin County or nicer parts of
          the Peninsula, but your mileage may vary. When in doubt, do as you see
          the locals doing; it‘s pretty easy to tell when you’ve ridden into a
          posh neighborhood.
        </p>

        <Heading>E-bikes to the rescue</Heading>

        <p>
          Man, these hills are a total drag, am I right? Not everyone digs it,
          but e-bikes sure do make it easier. Visitors can rent them from any of
          the major bike rental shops.
        </p>

        <Heading>Regional overview</Heading>

        <p>
          A mix of urban and natural beauty—and the challenges of each—are what
          make biking in <strong>San Francisco</strong> so enjoyable. This is a
          dense, urban space, so you can expect some cars and mayhem, but these
          routes are designed to follow well-worn paths with good bike
          infrastructure to lead you from urban areas to the natural beauty
          around the shoreline.
        </p>

        <p>
          Crossing the Golden Gate Bridge is both beautiful and annoying, but
          the variety of terrain, warmer weather, and bike-friendly routes make{" "}
          <strong>North Bay</strong> riding a top choice for riders who want to
          get out of town.
        </p>

        <p>
          Riding toward the <strong>South</strong> is generally not as easy or
          scenic as heading north, but there are some interesting routes to add
          some variety to your repertoire when you‘ve already been north.
          Coastal routes are beautiful, but expect more cars and less bike
          infrastructure.
        </p>

        <p>
          This guide is focused on routes beginning in San Francisco and
          therefore doesn‘t include routes the East Bay. There are plenty of
          rides over there if you‘d like to drive, ferry or BART. Check out{" "}
          <a href="https://bayareabikerides.net/" rel="external noopener">
            Bay Area Bike Rides
          </a>{" "}
          to learn more.
        </p>

        <p className={styles.routes}>
          <strong>Cool, I get it! Now…</strong>
        </p>

        <p>
          <Link className={buttonStyles("primary")} href="/">
            Take me to the routes <SquareArrowRight />
          </Link>
        </p>
      </Layout>
    </PageWrapper>
  );
}
