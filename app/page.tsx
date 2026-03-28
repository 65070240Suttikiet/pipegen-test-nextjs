import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let userCount = 0;
  try {
    userCount = await prisma.user.count();
  } catch {
    // CI ไม่มี DB → ไม่เป็นไร
  }
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>PipeGen Test App</h1>
      <p>Next.js 15 + Prisma + Vitest</p>
      <p>Users in database: {userCount}</p>
    </main>
  );
}