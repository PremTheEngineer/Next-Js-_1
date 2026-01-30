import type { Metadata } from "next";
import Footer from "../../components/footer/Footer";
import HeaderMinimal from "../../components/header/HeaderMinimal";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderMinimal />
      {children}
      <Footer />
    </>
  );
}
