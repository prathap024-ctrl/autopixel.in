import { NavbarLayout } from "@/layouts/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import FooterLayout from "@/layouts/footer";

export const metadata = {
  title: "AutoPixel",
  description:
    "AutoPixel helps businesses grow with AI-powered marketing, automation, and digital solutions tailored to drive results. Scale smarter with performance-driven strategies.",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={outfit.style}>
        <NavbarLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
