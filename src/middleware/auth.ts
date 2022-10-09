import { NextFunction, Response } from "express";
import { unAuthorized } from "../helpers/handleErrors";
import { verifyToken } from "../helpers/handleJWT";
import { RequestExt } from "../interfaces/reqExt";

const checkAuth = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenByUser = req.headers.authorization || "";
    const token = tokenByUser.split(" ").pop();
    const tokenData = verifyToken(`${token}`);

    if (!tokenData) {
      unAuthorized(res, "TOKEN_NOT_VALID");
    } else {
      req.user = tokenData;
      next();
    }
  } catch (error) {
    unAuthorized(res, "TOKEN_NOT_VALID");
  }
};

export default checkAuth;
