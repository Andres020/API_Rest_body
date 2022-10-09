import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "13246";

export const generateJWT = (
  id: number,
  firstName: string,
  lastName: string,
  role: string
) => {
  return jwt.sign(
    {
      id: id,
      firstName: firstName,
      lastName: lastName,
      role: role,
    },
    JWT_SECRET!,
    {
      expiresIn: "24h", // expires in 24 hours
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
