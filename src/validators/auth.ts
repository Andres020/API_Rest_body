import { NextFunction, Response, Request } from "express";
import { check } from "express-validator";
import validateResult from "../helpers/handleValidations";
import User from "../models/user";

const allowRoles: string[] = ["operator", "admin"];

const validateUser = [
  check("firstName").exists().not().isEmpty().isLength({ min: 3 }),
  check("lastName").exists().not().isEmpty().isLength({ min: 3 }),

  check("username")
  .exists()
  .withMessage("Username not valid")
  .custom(async (value, { req }) => {
    const isValidEmail = await User.findOne({
      where: { username: req.body.username },
    });
    if (isValidEmail) {
      return Promise.reject("Username already in use");
    }
    return true;
  })
  .withMessage("Username already in use"),

  check("email")
    .exists()
    .isEmail()
    .withMessage("E-mail not valid")
    .custom(async (value, { req }) => {
      const isValidEmail = await User.findOne({
        where: { email: req.body.email },
      });
      if (isValidEmail) {
        return Promise.reject("E-mail already in use");
      }
      return true;
    })
    .withMessage("E-mail already in use"),

  check("role")
    .exists()
    .custom((role, { req }) => {
      return allowRoles.includes(req.body.role);
    })
    .withMessage("role not allow"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export default validateUser;
