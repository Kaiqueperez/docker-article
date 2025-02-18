import { words } from "./constants/index.js";
import prisma from "./shared/prismaClient.js";

async function main() {
  console.log(words);
  const response = await prisma.randomWords.createMany({
    data: words,
  });
  return response;
}

main()
  .then((data) => {
    console.log("Seed data created successfully");
    console.log(data);
  })
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
