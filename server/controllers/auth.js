const { Users } = require("../database");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const err = new Error("fill in required fields");
    err.status = 400;
    next(err);
    return;
  }

  const userExist = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (userExist) {
    const err = new Error("Email already in use");
    err.status = 400;
    next(err);
    return;
  }
  console.log("worked");
  //hashing password
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const saved = await Users.create({ email: email, password: hashPassword, name});
    res.status(201).json(saved);
  } catch (error) {
    const err = new Error(error.message);
    next(err);
  }
};

const login = async (req, res, next) => {
  const { password, email } = req.body;

  if (!email || !password) {
    const err = new Error("please fill in all fields");
    err.status = 400;
    return next(err);
  }
  const existingUser = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    const err = new Error("incorrect email or password");
    err.status = 400;
    return next(err);
  }
  //COMPARE PASSWORD
  try {
    const correct = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    const { email, id, isAdmin, role,...others } = existingUser;

    const userInfo = {
      isAdmin: existingUser.isAdmin,
      email: existingUser.email,
      role: existingUser.role,
      id: existingUser.id
    };
    correct ? res.status(200).json({ email, id, isAdmin, token: generateToken(userInfo) })
      : res.status(400).json("incorrect password");
  } catch (error) {
    const err = new Error(error.message);
    return next(err);
  }
};
;
 

module.exports = { signup, login };
