import prisma from "../shared/prismaClient.js";

const privateService = {
  getPrivateData: async (userData) => {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword };
  },
};

export default privateService;
