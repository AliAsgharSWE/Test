import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { env } from "process";
import { routes } from "@/src/constants/routes";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-poppins",
});

const DOMAIN =
  env.DOMAIN ||
  (env.PUBLIC_DOMAIN ? `https://${env.PUBLIC_DOMAIN}` : undefined);

export const metadata: Metadata = {
  metadataBase: DOMAIN ? new URL(DOMAIN) : undefined,
  title: {
    default: routes.HOME.metaTitle,
    template: "%s | Fifa World Cup 2026I",
  },
  description: routes.HOME.description,
  openGraph: {
    title: routes.HOME.metaTitle,
    description: routes.HOME.description,
    url: DOMAIN,
  },
  twitter: {
    card: routes.HOME.twitter.card,
    title: routes.HOME.twitter.title,
    description: routes.HOME.twitter.description,
    images: [`${DOMAIN}${routes.HOME.twitter.image}`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: DOMAIN,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/fav-icon/apple-touch-icon.svg",
    },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/fav-icon/favicon-32x32.svg",
    },
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      url: "/fav-icon/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      sizes: "16x16",
      type: "image/png",
      url: "/fav-icon/favicon-16x16.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:image" content={`${DOMAIN}${routes.HOME.ogImage}`} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <NextTopLoader
          showSpinner={false}
          color="#FE5A01"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          easing="ease"
          speed={100}
        />
        {children}
      </body>
    </html>
  );
}
