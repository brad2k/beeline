import Image from "next/image";
import bikeImage from "../../images/bike.png";
import Layout from "../Layout";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Image
        src={bikeImage}
        alt="Vector drawing of a road bicycle"
        className={styles.image}
        width={200}
        height={112}
        loading="lazy"
      />
      <Layout context="wrapper" className={styles.bar}>
        <p>
          The Beeline is a production from{" "}
          <a href="https://www.bradazevedo.com/" rel="external noopener author">
            Brad Azevedo
          </a>
        </p>
      </Layout>
    </footer>
  );
}
