import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Buy, sell or rent properties in Bengaluru with the experts in real estate. We are a preffered channel partners for Puravankara, Prestige, Sobha, Brigade Buiders.",
  description: "Buy, Sell or Rent Properties with Getta Properties, the leaders in Bengaluru real estate with over 10 Years of experience. Search over millions of properties listed with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

      </head>
      <body
        className={`font-roboto text-[#1a1a1a] antialiased`}
      >
        <StoreProvider>
        <Header />
        {children}
        <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
