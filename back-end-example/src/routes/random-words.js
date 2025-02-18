import express from "express";
import { words } from "../constants/index.js";

const randomWordsRoutes = express.Router();

randomWordsRoutes.get("/random-words", (req, res) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  console.log({ randomWord });
  res.send({ message: randomWord });
});

export default randomWordsRoutes;
