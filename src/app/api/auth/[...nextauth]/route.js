import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db"


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log(credentials, "credentials")
                const emailExist = await db.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                })
                if (!emailExist) {
                    throw new Error("Email address not found")
                }


                const isValid = await bcrypt.compare(credentials.password, emailExist.password);
                if (!isValid) throw new Error("Invalid credentials");

                return { id: emailExist.id, username: emailExist.username, email: emailExist.email };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
              token.username = user.username; // Store username in JWT token
            }
            return token;
          },
          async session({ session, token }) {
            console.log(session, "session"); // Debugging
            session.user.id = token.id;
            session.user.username = token.username; // Retrieve username from token
            return session;
          },
    },
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login", // Redirect to custom login page
        // signOut: "/logout",
        // error: "/auth/error", // Error page
        // verifyRequest: "/auth/verify-request", // Email verification
        // newUser: "/auth/new-user", // New user registration
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
