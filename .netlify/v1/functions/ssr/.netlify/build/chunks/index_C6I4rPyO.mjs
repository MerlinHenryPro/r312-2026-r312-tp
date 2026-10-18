import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { A as maybeRenderHead, M as addAttribute, k as renderTemplate, w as renderComponent, z as createAstro } from "./sequence_-QGHDwK9.mjs";
import { t as createComponent } from "./compiler_Dpe4cbLr.mjs";
import { t as $$Layout } from "./Layout_Cgp1X5Ud.mjs";
import { t as $$BasketProfil } from "./BasketProfil_B3yvHYSW.mjs";
import { n as lireTags, t as db } from "./db_DWWRFVLs.mjs";
//#region src/pages/baskets/index.astro
var baskets_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const toutesLesBaskets = db.prepare("SELECT * FROM BASKETS WHERE user_id = ?").all(Astro.locals.user.id);
	const tagsDisponibles = [...new Set(toutesLesBaskets.flatMap((basket) => lireTags(basket.tags)))].sort();
	const tagsSelectionnes = Astro.url.searchParams.getAll("tag");
	const baskets = toutesLesBaskets.filter((basket) => {
		const tags = lireTags(basket.tags);
		return tagsSelectionnes.length === 0 || tagsSelectionnes.every((tag) => tags.includes(tag));
	});
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="p-4"><h1 class="text-2xl font-bold mb-6 text-center">Mes baskets</h1><form method="GET" class="mb-6 flex justify-center"><details class="dropdown"><summary class="btn btn-outline">Filtrer par tags (${tagsSelectionnes.length})</summary><div class="dropdown-content z-10 mt-2 w-64 rounded-box bg-base-100 p-4 shadow-xl">${tagsDisponibles.length > 0 ? renderTemplate`<div class="flex max-h-60 flex-col gap-2 overflow-y-auto">${tagsDisponibles.map((tag) => renderTemplate`<label class="flex cursor-pointer items-center gap-2"><input type="checkbox" name="tag"${addAttribute(tag, "value")} class="checkbox checkbox-sm"${addAttribute(tagsSelectionnes.includes(tag), "checked")}><span>${tag}</span></label>`)}</div>` : renderTemplate`<p class="text-sm opacity-70">Aucun tag disponible.</p>`}<button type="submit" class="btn btn-primary mt-4 w-full">Appliquer</button>${tagsSelectionnes.length > 0 && renderTemplate`<a href="/baskets" class="btn btn-ghost mt-2 w-full">Réinitialiser</a>`}</div></details></form><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${baskets.map((basket) => renderTemplate`<div class="card bg-base-100 shadow-md"><div class="card-body items-center text-center">${renderComponent($$result, "BasketProfil", $$BasketProfil, { ...basket })}<h2 class="card-title">${basket.description || "Sans nom"}</h2><div class="flex flex-wrap justify-center gap-1">${lireTags(basket.tags).map((tag) => renderTemplate`<span class="badge badge-outline">${tag}</span>`)}</div><div class="card-actions justify-center mt-2"><a${addAttribute(`/baskets/${basket.id}`, "href")} class="btn btn-primary">Modifier</a></div></div></div>`)}</div></div>` })}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/baskets/index.astro", void 0);
var $$file = "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/baskets/index.astro";
var $$url = "/baskets";
//#endregion
//#region \0virtual:astro:page:src/pages/baskets/index@_@astro
var page = () => baskets_exports;
//#endregion
export { page };
