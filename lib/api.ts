import { prisma } from "./prisma";

export async function getUsers() {
  return prisma.user.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function createUser(data: { name: string; email: string }) {
  return prisma.user.create({ data });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({ where: { id } });
}