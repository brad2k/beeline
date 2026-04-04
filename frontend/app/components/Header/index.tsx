import styles from "./header.module.css";
import Link from "next/link";
import Layout from "../Layout";

const headerText = "The Beeline";

type HeaderProps = {
  pageType?: string;
};

export default function Header({ pageType }: HeaderProps) {
  return (
    <Layout as="header" context="wrapper" className={styles.root}>
      <Link href="/" className={styles.logo} data-label={headerText}>
        {headerText}
      </Link>
      <hr className={styles.divider} />
      {pageType === "home" && (
        <h1 className={styles.subhead}>
          Road biking routes in{" "}
          <span className={styles.highlight}>San Francisco</span>
        </h1>
      )}
    </Layout>
  );
}
