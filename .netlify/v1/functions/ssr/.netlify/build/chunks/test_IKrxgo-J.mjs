import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { k as renderTemplate } from "./sequence_-QGHDwK9.mjs";
import { t as createComponent } from "./compiler_Dpe4cbLr.mjs";
import { t as renderScript } from "./script_CIiv1Zln.mjs";
//#region src/pages/test.astro
var test_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Test,
	file: () => $$file,
	url: () => $$url
});
var $$Test = createComponent(($$result, $$props, $$slots) => {
	console.log("Message A : écrit depuis le frontmatter");
	return renderTemplate`${renderScript($$result, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/test.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/test.astro", void 0);
var $$file = "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/test.astro";
var $$url = "/test";
//#endregion
//#region \0virtual:astro:page:src/pages/test@_@astro
var page = () => test_exports;
//#endregion
export { page };
