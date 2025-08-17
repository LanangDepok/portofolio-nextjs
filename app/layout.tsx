import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ToggleProvider } from "./context/ToggleContext";
import { LocaleProvider } from "./context/LocaleContext";
import Background from "./components/Background";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Bagas Rizkiyanto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="">
      <body className={`${sourceSans.variable} antialiased`}>
        <ToggleProvider>
          <LocaleProvider localeValue="id">
            <Navbar />
            <Background>{children}</Background>
          </LocaleProvider>
        </ToggleProvider>
      </body>
    </html>
  );
}
