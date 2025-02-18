import 'dotenv/config'
import express from "express";
import routeAuth from "./routes/auth.js";
import app from "./shared/express.js";
import privateRoutes from "./routes/privateRoutes.js";
import randomWordsRoutes from "./routes/random-words.js";


const PORT = 4001;

app.use(express.json());

app.use(randomWordsRoutes);

app.use(routeAuth);

app.use(privateRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port => " + PORT);
});
