import { Op } from "sequelize";
import { Auth, UserInterface } from "../interfaces";
import User from "../models/user";
import { compare, encrypt } from "../helpers/handleBcrypt";
import { generateJWT } from "../helpers/handleJWT";

export const registerUserService = async (body: UserInterface) => {
  const checkIs = await User.findOne({
    where: {
      [Op.or]: [{ username: body.username }, { email: body.email }],
    },
  });

  if (!!checkIs) return "ERROR";

  const password = await encrypt(body.password);
  body = { ...body, password: password };

  const user = await User.create(body);
  return user;
};

export const loginUserService = async (body: Auth) => {
  const username = body.username || "";
  const email = body.email || "";

  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: username }, { email: email }],
    },
  });

  if (!user) return "ERROR";

  const passwordHash = user.password;
  const isCorrect = await compare(body.password, passwordHash);

  if (!isCorrect) return "UNAUTHORIZE";

  const jwt = generateJWT(
    Number(user.id),
    user.firstName,
    user.lastName,
    user.role
  );

  return jwt;
};
