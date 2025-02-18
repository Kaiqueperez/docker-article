import authService from "../service/auth-service.js";

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = authService.signin(email, password);
    res.send(token);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  const user = req.body;

  try {
    const newUser = await authService.signup(user);
    res.send(newUser);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export default {
  signin,
  signup,
};
