import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Addar fatima zahra portfolio ",
  description: " 'Portfolio de Fatima Zahra Addar, développeuse Full Stack. Découvrez mes projets, compétences, formations et certifications.",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <link rel="icon" href="/image/Addar fatima zahra.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
