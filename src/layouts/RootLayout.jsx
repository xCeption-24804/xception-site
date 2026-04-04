import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../sections/Footer";
import { ScrollToTop } from "./ScrollToTop";

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
