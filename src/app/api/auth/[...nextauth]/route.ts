import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId) {
    throw new Error("Missing GOOGLE_CLIENT_ID environment variable");
}

if (!googleClientSecret) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET environment variable");
}

const handler = NextAuth({
    providers: [
        Google({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
    ],
});

export { handler as GET, handler as POST };