import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[430px] mx-auto bg-background min-h-screen relative overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
