// layout.js
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

// export const metadata = {
//   title: "DevBlog - Scarlet Wings Creative",
//   description: "Command reference and development guides",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="apple-mobile-web-app-title"
          content="Scarlet Wings Creative"
        />
      </Head>
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
