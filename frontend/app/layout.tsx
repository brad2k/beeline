import clsx from "clsx";
import { Bebas_Neue, Caprasimo, DM_Sans } from "next/font/google";
import "./css/imports.css";
import styles from "./layout.module.css";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: ["400"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  icons: {
    icon: "/icon.svg",
  },
  apple: "/apple-touch-icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(caprasimo.variable, dm_sans.variable, bebas.variable)}
    >
      <body className={styles.root}>{children}</body>
    </html>
  );
}
