import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Providers from "./providers";
import ScreenSizeWarning from "@/components/ui/ScreenSizeWarning";
import { fonts } from "../fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "RFP Tool",
  description: "A tool for managing RFPs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.Inter.variable}>
      <body>
        <Providers>
          <ScreenSizeWarning>{children}</ScreenSizeWarning>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
