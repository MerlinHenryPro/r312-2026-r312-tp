import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { A as maybeRenderHead, k as renderTemplate, w as renderComponent } from "./sequence_-QGHDwK9.mjs";
import { t as createComponent } from "./compiler_Dpe4cbLr.mjs";
import { t as $$Layout } from "./Layout_Cgp1X5Ud.mjs";
import { t as $$BasketProfil } from "./BasketProfil_B3yvHYSW.mjs";
import { t as $$BasketDessus } from "./BasketDessus_C8o9Ih6s.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 class="text-3xl font-bold underline text-primary">Hello world!</h1>${renderComponent($$result, "BasketProfil", $$BasketProfil, {})}${renderComponent($$result, "BasketDessus", $$BasketDessus, {})}` })}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/index.astro", void 0);
var $$file = "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
