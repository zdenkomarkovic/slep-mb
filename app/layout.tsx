import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Šlep služba i kombi prevoz MB — brza pomoć na putu 24/7. Vuča vozila, prevoz nameštaja i robe. Pozovite: 067 718 9138",
  keywords: [
    "šlep služba",
    "kombi prevoz",
    "vuča vozila",
    "pomoć na putu",
    "selidbe",
    "prevoz nameštaja",
    "MB",
    "24/7",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
