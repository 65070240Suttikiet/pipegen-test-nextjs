import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PipeGen Test App",
  description: "Next.js + Prisma test project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}