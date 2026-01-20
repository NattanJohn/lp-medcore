import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MedCore | Ortopedia e Fisioterapia de Alta Performance",
  description: "Especialistas dedicados a devolver sua qualidade de vida com diagnósticos precisos e tratamentos avançados em Matinhos - PR.",
  keywords: ["ortopedia", "fisioterapia", "clínica médica", "saúde", "matinhos"],
  authors: [{ name: "Nattan John" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-[#0f172a]`}>
        {children}
      </body>
    </html>
  );
}