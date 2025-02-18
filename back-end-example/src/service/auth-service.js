import prisma from "../shared/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authService = {
  signin: async (email, password) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ email: user.email }, "your_secret_key");

    return token;
  },

  signup: async (data) => {
    if (!data.password || !data.email) {
      throw new Error("password and Email are required");
    }

    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password, ...userWithoutPassword } = createdUser;

    return userWithoutPassword;
  },
};

export default authService;
