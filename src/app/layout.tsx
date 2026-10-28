import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veg ’n more – PDPU Branch | Review Generator",
  description: "Share your experience with Veg ’n more PDPU Branch and quickly post your Google review.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#faf6f0] text-slate-800 antialiased selection:bg-[#991b3b]/10 selection:text-[#991b3b]">
        {children}
      </body>
    </html>
  );
}
