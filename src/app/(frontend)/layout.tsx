import Header from "@/app/components/frontend/Header";
import Footer from "@/app/components/frontend/Footer";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

