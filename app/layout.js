// import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
//   display: "swap",
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
//   display: "swap",
// });

const playfair = {
  variable: "--font-playfair",
};

const dmSans = {
  variable: "--font-dm-sans",
};

export const metadata = {
  title: "Furnico — Catalog Furniture",
  description: "Temukan furniture berkualitas tinggi untuk hunian impian Anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}