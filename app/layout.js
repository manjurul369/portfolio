import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../public/components/Nav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "MD Manjurul Islam | Portfolio",
  description: "A portfolio showcasing my work and skills. Explore my projects, experience, and contact information.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}