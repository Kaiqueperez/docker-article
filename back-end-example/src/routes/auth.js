import express from "express";
import authController from "../controllers/auth-controller.js";

const routeAuth = express.Router();

routeAuth.post("/api/auth/login", authController.signIn);

routeAuth.post("/api/auth/register", authController.signUp);

export default routeAuth;
