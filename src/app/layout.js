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
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Customer Feedback | Future Motors - Tata Motors",
    template: "%s | Future Motors",
  },

  description:
    "Share your experience with Future Motors Tata Motors dealership. Your feedback helps us improve our service and customer satisfaction.",

  keywords: [
    "Tata Motors feedback",
    "Future Motors",
    "customer feedback form",
    "dealership survey",
    "vehicle feedback India",
  ],

  authors: [{ name: "Future Motors" }],
  creator: "Future Motors",

  openGraph: {
    title: "Future Motors Customer Feedback",
    description:
      "Tell us about your experience with Tata Motors dealership. Your feedback matters.",
    url: "https://yourdomain.com/feedback",
    siteName: "Future Motors",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Tata Motors Feedback",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Future Motors Feedback",
    description:
      "Share your Tata Motors dealership experience with us.",
    images: ["/cover.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
