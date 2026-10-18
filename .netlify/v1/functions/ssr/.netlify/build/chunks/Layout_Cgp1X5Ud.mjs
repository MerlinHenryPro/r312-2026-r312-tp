import { E as renderSlot, M as addAttribute, j as renderHead, k as renderTemplate, z as createAstro } from "./sequence_-QGHDwK9.mjs";
import { t as createComponent } from "./compiler_Dpe4cbLr.mjs";
import { t as renderScript } from "./script_CIiv1Zln.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const user = Astro.locals.user;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Astro Basics</title>${renderHead($$result)}</head><body><nav class="navbar bg-base-200 px-4"><div class="flex-1 flex gap-4"><a href="/" class="text-lg font-semibold">Accueil</a><a href="/configurateur">Configurateur</a><a href="/baskets">Mes Baskets</a></div><div class="flex-none">${user && renderTemplate`<button id="logout" class="btn btn-sm">Déconnexion (${user.name})</button>`}</div></nav>${renderSlot($$result, $$slots["default"])}</body></html>${renderScript($$result, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
