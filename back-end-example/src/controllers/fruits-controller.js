import { fruitService } from "../service/get-fruit-service.js";

const getRandomFruit = async (req, res) => {
  try {
    const fruits = await fruitService.getFruit();
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomFruit = fruits[randomIndex];
    res.send({ message: randomFruit });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default { getRandomFruit };
