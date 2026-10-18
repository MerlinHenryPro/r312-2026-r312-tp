import { ct as defineMiddleware, t as sequence } from "./chunks/sequence_-QGHDwK9.mjs";
import { t as auth } from "./chunks/auth_CfGiCHdG.mjs";
//#region src/middleware.ts
var onRequest$1 = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;
	if (pathname.startsWith("/api/auth/")) return next();
	const result = await auth.api.getSession({ headers: context.request.headers });
	context.locals.user = result?.user ?? null;
	if (context.locals.user || pathname === "/login") return next();
	if (pathname.startsWith("/api/")) return new Response("Non authentifié", { status: 401 });
	return context.redirect("/login");
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
