import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { badRequest } from "./handleErrors";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(400).json(error);
  }
};

export default validateResult;
