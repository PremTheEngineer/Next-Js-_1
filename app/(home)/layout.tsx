import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../globals.css";
import { AuthProvider } from "@/providers/authProvider";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <AuthProvider>
        <Header />
        {modal}
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}
