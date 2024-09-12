import "./globals.css";
import { Istok_Web, Montserrat } from "next/font/google";
import { CMS_NAME } from "@/lib/constants";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `${CMS_NAME}`,
  description: `Integrated Community Based Center for Child Care, Protection and Swim-Safe Facilities (ICBC) Project`,
  icons: {
    icon: "/favicon.png",
  },
};

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-istok-web",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// footer
function Footer() {
  return (
    <footer className="bg-primary flex flex-col justify-center gap-6 py-6 border-t border-slate-500">
      <div className="flex justify-center">
        <Image src="/full-logo.svg" alt="logo" width={131} height={45} />
      </div>

      <div className="text-white text-base flex gap-8 justify-center">
        <Link href="/about">About</Link>
        <Link
          target="_blank"
          href="https://assets.ctfassets.net/vzrwykenux1p/62hYMpAinMGYR71hmeaMBk/c752e73980470d062598568d7266bd76/ICBC_updated_FAQ.pdf"
        >
          FAQs
        </Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="text-white text-base flex gap-8 justify-center">
        <Link
          href="https://mowca.gov.bd/"
          target="_blank"
          className="flex gap-2"
        >
          Ministry of Women and Children Affairs{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
        <Link
          href="https://shishuacademy.gov.bd/"
          target="_blank"
          className="flex gap-2"
        >
          Bangladesh Shishu Academy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </div>

      <hr className="w-2/6 mx-auto" />

      {/* copyright */}
      <p className="text-center text-white text-sm">
        &copy; {new Date().getFullYear()} All rights reserved. ICBC
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${istokWeb.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body>
        <section className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
