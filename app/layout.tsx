import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ToggleProvider } from "./context/ToggleContext";
import { LocaleProvider } from "./context/LocaleContext";
import Background from "./components/Background";

const jetBrainsMono = JetBrains_Mono({
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
      <body className={`${jetBrainsMono.className} antialiased text-white`}>
        <ToggleProvider>
          <LocaleProvider>
            <Navbar />
            <Background>{children}</Background>
          </LocaleProvider>
        </ToggleProvider>
      </body>
    </html>
  );
}
