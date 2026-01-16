import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient | undefined 
};

// Create connection pool (reuse across requests)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ 
    adapter,  // Required for Prisma 7.2.0
    log: ["query", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
