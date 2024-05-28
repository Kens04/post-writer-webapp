import { User as NextAuthUser } from "next-auth";

type UserId = string;

declare module "next-auth" {
  interface User extends NextAuthUser {
    id: UserId;
  }

  interface Session {
    user: User;
  }
}