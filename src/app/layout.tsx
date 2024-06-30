import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasks Managers",
  description: "system of tasking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="https://zvielkoren.github.io/" className="hover:underline">zvielkoren</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
