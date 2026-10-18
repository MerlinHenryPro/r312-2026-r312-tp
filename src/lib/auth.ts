// @ts-expect-error Bun runtime module
import { Database } from "bun:sqlite";
import { betterAuth } from "better-auth";

// Même fichier que src/lib/db.ts
const database = new Database(new URL("../../data/db.sqlite", import.meta.url).pathname, { create: true });

export const auth = betterAuth({
  database,
  emailAndPassword: { enabled: true },
   socialProviders: {
    google: {
      clientId: import.meta.env.GOOGLE_CLIENT_ID as string,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET as string,
    },
      github: {
      clientId: import.meta.env.GITHUB_CLIENT_ID as string,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});