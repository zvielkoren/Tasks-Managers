import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/auth"; // Adjust import path based on your project structure

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Ensure both username and password are provided
        if (!credentials?.username || !credentials?.password) return null;

        try {
          // Call your login function to authenticate the user
          const user = await login(credentials.username, credentials.password);
          return user; // Return the authenticated user object
        } catch (e) {
          console.error("Error in login:", e);
          return null; // Return null if login fails
        }
      },
    }),
  ],
  pages: {
    signIn: "/signIn", // Specify your custom signIn page route
  },
});

export { handler as GET, handler as POST };
