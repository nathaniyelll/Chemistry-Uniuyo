import type { Metadata } from "next";
import { Providers, lusitana } from "@/context";

import "../styles/globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s | Chemistry Department, University of Uyo",
    default: "Welcome to the Department of Chemistry, University of Uyo",
  },
  description: "Browse through our amazing variety of courses",
  keywords: [],
  authors: [
    { name: "Nathaniel Essien", url: "" },

    {
      name: "Clever Akanimoh",
      url: "",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lusitana.variable} font-serif`}>
      <body className="scroll-smooth w-[100svw] overflow-x-hidden">
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
