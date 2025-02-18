import prisma from "../shared/prismaClient.js";

export const fruitService = {
  getFruit: async () => {
    const fruit = await prisma.randomWords.findMany();
    return fruit;
  },
};
