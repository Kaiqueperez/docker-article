import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ error: "No token provided" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "your_secret_key");

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ error: "Unauthorized" });
  }
};
