import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metageeks Technologies",
  description: "Metageeks Technologies is a software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.63/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/n8KWA6rKlZYSWsSZ/scene.splinecode"></spline-viewer> */}
    </html>
  );
}
