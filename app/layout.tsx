import { PropsWithChildren } from "react";
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
