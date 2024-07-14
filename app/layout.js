import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD app",
  description: "CRUD app build using nex.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700 text-gray-500`}>
        <Header />
        <main>{children}</main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
