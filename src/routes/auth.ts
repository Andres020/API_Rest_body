import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth";
import checkAuth from "../middleware/auth";

const router = Router();

router.post("/register", checkAuth, registerUser);
router.post("/login", loginUser);

export default router;
