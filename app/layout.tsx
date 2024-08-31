import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <ModalProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
