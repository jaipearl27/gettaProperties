import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
