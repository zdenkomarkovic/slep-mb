import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Šlep služba i kombi prevoz MB — brza pomoć na putu 24/7. Vuča vozila, prevoz nameštaja i robe. Pozovite: 067 718 9138";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "šlep služba",
    "slep sluzba",
    "kombi prevoz",
    "vuča vozila",
    "vuca vozila",
    "pomoć na putu",
    "pomoc na putu",
    "selidbe",
    "prevoz nameštaja",
    "prevoz robe",
    "hitna pomoć na putu",
    "tegljač",
    "auto šlep",
    "šlep MB",
    "24/7",
    "Srbija",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description,
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  name: SITE_NAME,
  description,
  url: SITE_URL,
  telephone: "+381677189138",
  email: "mbogdanovic110@gmail.com",
  image: `${SITE_URL}/logo.png`,
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Srbija",
  },
  sameAs: ["https://www.instagram.com/slep_sluzba_i_kombi_prevozmb/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
