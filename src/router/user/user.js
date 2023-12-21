import express from "express";
const router = new express.Router({});
import { user } from "../../controller/user/user.js";


router.route("/register").post(user.register);
router.route("/login").post(user.login);

export default router;