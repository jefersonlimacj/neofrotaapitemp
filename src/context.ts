// src/context.ts
import { PrismaClient } from "@prisma/client/default";

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
};

export const context: Context = {
  prisma,
};
