import bcrypt from "bcrypt";
import { User, Active } from "../models/index.js";

const userGet = ( async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while fetching users." });
  }
});

const userPost = (async (req, res) => {
  const { password, ...body } = req.body;
  let user;
  const saltRounds = 10;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    user = body;
    user.passwordHash = hash;
    await User.create(user);
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while creating the user." });
  }
});

const userUpdate = (async (req, res) => {
  const { id, ...body } = req;
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    if (!user) {
      return res.status(401).json({ error: "User not found it." });
    }
    user = body;
    await user.save();
    return res.json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while updating the user." });
  }
});

const userDelete = ( async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    if (!user) {
      return res.status(401).json({ error: "User not found it." });
    }
    await user.destroy();
    return res.json("You have been successfully delete the user.");
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while deleting this cart" });
  }
});

export {
  userGet,
  userPost,
  userUpdate,
  userDelete
}