import { Database } from "bun:sqlite";
import { betterAuth } from "better-auth";
//#region src/lib/auth.ts
var database = new Database(new URL("../../data/db.sqlite", import.meta.url).pathname, { create: true });
var auth = betterAuth({
	database,
	emailAndPassword: { enabled: true },
	socialProviders: {
		google: {
			clientId: void 0,
			clientSecret: void 0
		},
		github: {
			clientId: void 0,
			clientSecret: void 0
		}
	}
});
//#endregion
export { auth as t };
