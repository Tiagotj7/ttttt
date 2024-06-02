import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/loading";
import { DeviceOrientationControls} from "@react-three/drei";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiagotj7 | 💻",
  description: "Tiagotj7 - Projeto do App Versão Beta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading>
          {children}
        </Loading>
        </body>
    </html>
  );
}
