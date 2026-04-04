import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

type PageWrapperProps = React.PropsWithChildren<{
  pageType?: string;
}>;

export default function PageWrapper({ children, pageType }: PageWrapperProps) {
  return (
    <>
      <Header pageType={pageType} />
      {children}
      <Footer />
    </>
  );
}
