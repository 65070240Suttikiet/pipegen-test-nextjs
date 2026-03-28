import { prisma } from "@/lib/prisma";

export default async function Home() {
  const userCount = await prisma.user.count();
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>PipeGen Test App</h1>
      <p>Next.js 14 + Prisma + Vitest</p>
      <p>Users in database: {userCount}</p>
    </main>
  );
}