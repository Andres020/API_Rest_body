import { Request, Response, Router } from "express";
import authRoutes from "./auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("*", async (req: Request, res: Response) => {
  res.json({ error: "Not found" });
});

export default router;
