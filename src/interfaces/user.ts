import { Auth } from ".";

export interface UserInterface extends Auth {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: "operador" | "admin";
  password: string;
  isActive: boolean;
}
