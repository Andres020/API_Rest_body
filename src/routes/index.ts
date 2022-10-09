import { Request, Response, Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerSetup from "../helpers/swaggerSetup";
import authRoutes from "./auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerSetup));
router.use("*", async (req: Request, res: Response) => {
  res.json({ error: "Not found" });
});

export default router;
