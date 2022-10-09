import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth";
import checkAuth from "../middleware/auth";
import validateUser from "../validators/auth";

const router = Router();

/**
 * Post track
 *  @openapi
 *  /auth/register:
 *   post:
 *    tags:
 *      - auth
 *    summary: "Register user"
 *    description: Get track detail
 *    requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/user"
 *    responses:
 *      '200':
 *        description: registro exitoso
 *    security:
 *     - bearerAuth: []
 */
router.post("/register", checkAuth, validateUser, registerUser);

/**
 * Post track
 *  @openapi
 *  /auth/login:
 *   post:
 *    tags:
 *      - auth
 *    summary: "Login user"
 *    description: Get track detail
 *    requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/login"
 *    responses:
 *      '200':
 *        description: login exitoso
 *    security:
 *      -api_key: []
 */
router.post("/login", loginUser);

export default router;
