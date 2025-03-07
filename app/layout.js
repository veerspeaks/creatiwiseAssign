import { Syne, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Designer Portfolio",
  description: "Freelance Designer Portfolio from San Francisco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${poppins.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
