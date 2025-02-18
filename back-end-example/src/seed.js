import { words } from "./constants/index.js";
import prisma from "./shared/prismaClient.js";

async function main() {
  await prisma.randomWords.createMany({
    data: words,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
