import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProgrammingBackground from "./components/programming-background";
import SmoothScroll from "./components/smooth-scroll";

export const metadata = {
  title: "Nahid Hasan Mizan",
  description: "My portfolio",
    icons: {
    icon: "/images/nh.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full relative">
        <div className="site-animated-bg" aria-hidden="true" />
        <ProgrammingBackground />
        <SmoothScroll />
        <Navbar />
        <main className="relative z-10 pb-24 pt-24 md:pb-0">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
