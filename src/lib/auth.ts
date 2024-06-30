import NextAuth from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "pg"
import { User } from "next-auth";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
})

type LoginFn = (username: string, password: string) => Promise<User>;
export const login: LoginFn = async (username: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  if (user && (await compare(password, user.password))) {
    user.password = "";
    return user;
  } else throw new Error("User Not Found!");
};