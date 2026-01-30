import Footer from "./components/Footer";
import Header from "./components/Header";
import CartContextProvider from "./store/CartContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartContextProvider>
      <Header></Header>
      {children}
      <Footer></Footer>
    </CartContextProvider>
  );
}
