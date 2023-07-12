//import { getEnv } from "";
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: "UTlWOS1hNG0zVWc0RG5ySFVkU046MTpjaQ",
      clientSecret: "NeTGAqFVohZhDqv-LZHpDuKBUiGOirjy6g2S21VCpDwtivNeFX",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
