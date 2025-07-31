import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Sanjay Maurya - Backend Developer Portfolio",
  description: "Backend Developer & Full Stack Engineer specializing in Node.js, Python, Java, and cloud infrastructure. Experienced in blockchain technology and machine learning.",
  keywords: ["Backend Developer", "Full Stack Engineer", "Node.js", "Python", "Java", "Blockchain", "Machine Learning", "API Development"],
  authors: [{ name: "Ankit Sanjay Maurya" }],
  creator: "Ankit Sanjay Maurya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitmaurya.dev",
    title: "Ankit Sanjay Maurya - Backend Developer Portfolio",
    description: "Backend Developer & Full Stack Engineer specializing in Node.js, Python, Java, and cloud infrastructure.",
    siteName: "Ankit Maurya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Sanjay Maurya - Backend Developer Portfolio",
    description: "Backend Developer & Full Stack Engineer specializing in Node.js, Python, Java, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
