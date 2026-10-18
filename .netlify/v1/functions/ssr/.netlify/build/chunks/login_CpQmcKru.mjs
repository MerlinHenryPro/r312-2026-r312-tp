import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { A as maybeRenderHead, k as renderTemplate, w as renderComponent, z as createAstro } from "./sequence_-QGHDwK9.mjs";
import { t as createComponent } from "./compiler_Dpe4cbLr.mjs";
import { t as renderScript } from "./script_CIiv1Zln.mjs";
import { t as $$Layout } from "./Layout_Cgp1X5Ud.mjs";
//#region src/pages/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Login = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Login;
	if (Astro.locals.user) return Astro.redirect("/baskets");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<form id="form" class="flex flex-col gap-3 w-full max-w-sm mx-auto py-10"><h1 class="text-2xl font-bold">Connexion</h1><input name="name" placeholder="Nom (pour créer un compte)" class="input input-bordered"><input name="email" type="email" placeholder="Email" class="input input-bordered" required><input name="password" type="password" placeholder="Mot de passe (8 caractères min.)" class="input input-bordered" required><p id="error" class="text-error"></p><button type="button" id="login" class="btn btn-primary">Se connecter</button><button type="button" id="signup" class="btn btn-outline">Créer un compte</button><button type="button" id="google" class="btn btn-outline">Se connecter avec Google</button><button type="button" id="github" class="btn btn-outline">Se connecter avec GitHub</button></form>` })}${renderScript($$result, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/login.astro", void 0);
var $$file = "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/login.astro";
var $$url = "/login";
//#endregion
//#region \0virtual:astro:page:src/pages/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
