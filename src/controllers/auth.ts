import { RequestHandler } from "express";
import {
  internalError,
  badRequest,
  notFound,
  unAuthorized,
} from "../helpers/handleErrors";
import { Auth } from "../interfaces";
import { UserInterface } from "../interfaces/user";
import { registerUserService, loginUserService } from "../services/auth";

export const registerUser: RequestHandler = async (req, res) => {
  try {
    const { body } = req as { body: UserInterface };
    const response = await registerUserService(body);

    if (response === "ERROR") return notFound(res, "USER_ALREDY_IN_USE");

    return res.json(response);
  } catch (error) {
    internalError(res, "ERROR_REGISTER_USER");
  }
};

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const { body } = req as { body: Auth };

    const response = await loginUserService(body);

    if (response === "ERROR") return notFound(res, "USER_NOT_FOUND");
    if (response === "UNAUTHORIZE")
      return unAuthorized(res, "PASSWORD_INCORRECT");

    return res.json(response);
  } catch (error) {
    internalError(res, "ERROR_LOGIN", error);
  }
};
