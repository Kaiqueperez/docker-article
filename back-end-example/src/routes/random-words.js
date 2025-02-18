import express from "express";
import fruitsController from "../controllers/fruits-controller.js";

const randomFruitsRoutes = express.Router();

randomFruitsRoutes.get("/random-words", fruitsController.getRandomFruit);

export default randomFruitsRoutes;
