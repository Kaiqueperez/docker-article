import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../shared/prismaClient.js";

const routeAuth = express.Router();

routeAuth.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    res.status(401).send("Invalid email or password");
    return;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    res.status(401).send("Invalid email or password");
    return;
  }

  const token = jwt.sign({ email: user.email }, "your_secret_key");

  res.status(200).json({ token });
});

routeAuth.post("/api/auth/register", async (req, res) => {
  const user = req.body;
  if (!user.password || !user.email) {
    res.status(400).send("password and Email are required");
    return;
  }

  const hashedPassword = bcrypt.hashSync(user.password, 10);

  try {
    await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
      },
    });

    res.send("User created successfully");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

export default routeAuth;
