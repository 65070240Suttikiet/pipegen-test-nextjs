import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      name: "Test User",
      email: "test@example.com",
      posts: {
        create: [
          { title: "First Post", content: "Hello World", published: true },
          { title: "Draft Post", content: "Work in progress" },
        ],
      },
    },
  });
  console.log("Seeded:", user);
}

main().catch(console.error).finally(() => prisma.$disconnect());