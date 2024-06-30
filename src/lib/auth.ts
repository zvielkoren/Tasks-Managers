import NextAuth from "next-auth";
import { User } from "next-auth";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Initialize NextAuth with Prisma adapter
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});

// Define LoginFn type for login function
type LoginFn = (username?: string, password?: string) => Promise<User>;

// Implement login function
export const login: LoginFn = async (username?: string, password?: string) => {
  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const user = await prisma.user.findFirst({
      where: {
        email: username,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Access the password property from the user object
    const passwordMatch = await compare(password, user.password || '');

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    // Convert id to string if necessary (assuming id is already string or number)
    return {
      ...user,
      id: user.id.toString(), // Assuming id is a number in the database
    };
  } catch (error) {
    throw new Error(`Authentication failed: ${error.message}`);
  }
};
