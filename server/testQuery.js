// testQuery.js (ES Module)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const rows = await prisma.partner.findMany();
  console.log(rows);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

