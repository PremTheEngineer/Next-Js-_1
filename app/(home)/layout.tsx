import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {modal}
      {children}
      <Footer />
    </>
  );
}
