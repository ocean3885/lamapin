import express from "express";
import { getUser } from "../controllers/user.controller.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/:username", getUser);

// router.post("/create", async (req, res) => {
//   const userInformation = req.body;
//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   await UserActivation.create({
//     displayName: req.body.displayName,
//     username: req.body.username,
//     email: req.body.email,
//     hashedPassword: hashedPassword,
//   });
// });

export default router;
