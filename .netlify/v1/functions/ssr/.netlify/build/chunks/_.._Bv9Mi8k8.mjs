import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { t as auth } from "./auth_CfGiCHdG.mjs";
//#region src/pages/api/auth/[...all].ts
var ____all__exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	prerender: () => false
});
var ALL = (ctx) => auth.handler(ctx.request);
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/[...all]@_@ts
var page = () => ____all__exports;
//#endregion
export { page };
