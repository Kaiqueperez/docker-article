import express from "express";
import { authMiddleware } from "../middleware/authMiddlware.js";
import privateService from "../service/private-service.js";

const privateRoutes = express.Router();

privateRoutes.use(authMiddleware);

privateRoutes.get("/private", async (req, res) => {
  const userData = req.user;

  try {
    const user = await privateService.getPrivateData(userData);
    res.send(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

privateRoutes.get("/private/hello", (req, res) => {
  res.send("Hello World na segunda rota");
});

export default privateRoutes;
