import { NavbarLayout } from "@/layouts/Navbar";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import FooterLayout from "@/layouts/footer";

export const metadata = {
  title: "AutoPixel",
  description:
    "AutoPixel helps businesses grow with AI-powered marketing, automation, and digital solutions tailored to drive results. Scale smarter with performance-driven strategies.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={spaceGrotesk.style}>
        <NavbarLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
