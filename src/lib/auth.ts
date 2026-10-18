import { DatabaseSync as Database } from "node:sqlite";
import { betterAuth } from "better-auth";

const databasePath = process.env.NETLIFY === "true"
  ? "/tmp/r312-auth.sqlite"
  : new URL("../../data/db.sqlite", import.meta.url).pathname;
const database = new Database(databasePath);

database.exec(`
  CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    emailVerified INTEGER NOT NULL DEFAULT 0,
    image TEXT,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY,
    expiresAt INTEGER NOT NULL,
    token TEXT NOT NULL UNIQUE,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL,
    ipAddress TEXT,
    userAgent TEXT,
    userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE
  );
  CREATE TABLE IF NOT EXISTS account (
    id TEXT PRIMARY KEY,
    accountId TEXT NOT NULL,
    providerId TEXT NOT NULL,
    userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    accessToken TEXT,
    refreshToken TEXT,
    idToken TEXT,
    accessTokenExpiresAt INTEGER,
    refreshTokenExpiresAt INTEGER,
    scope TEXT,
    password TEXT,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS verification (
    id TEXT PRIMARY KEY,
    identifier TEXT NOT NULL,
    value TEXT NOT NULL,
    expiresAt INTEGER NOT NULL,
    createdAt INTEGER,
    updatedAt INTEGER
  );
`);

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