import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { TbShovel } from "react-icons/tb";
import { cn } from "./utils";
import { Button } from "./components/ui/button";
import Subscribe from "./components/subscribe";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-2 lg:p-4",
          fontSans.variable
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <TbShovel fontSize={32} />
            <div>
              <h1 className="text-xl font-light">poldigs</h1>
              <p className="text-xs">
                world wide government and politican oversight
              </p>
            </div>
          </div>
          <Subscribe />
        </div>
        {children}
      </body>
    </html>
  );
}
