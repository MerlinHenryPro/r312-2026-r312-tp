import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { A as maybeRenderHead, M as addAttribute, k as renderTemplate, w as renderComponent, z as createAstro } from "./sequence_-QGHDwK9.mjs";
import { t as createComponent } from "./compiler_Dpe4cbLr.mjs";
import { t as renderScript } from "./script_CIiv1Zln.mjs";
import { t as $$Layout } from "./Layout_Cgp1X5Ud.mjs";
import { t as $$BasketProfil } from "./BasketProfil_B3yvHYSW.mjs";
import { t as $$BasketDessus } from "./BasketDessus_C8o9Ih6s.mjs";
import { r as normaliserTags, t as db } from "./db_CqyTowHk.mjs";
//#region src/components/Configurateur.astro
createAstro("https://astro.build");
var $$Configurateur$1 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Configurateur$1;
	const { configurationInitiale, gradientsInitiale = {} } = Astro.props;
	const configuration_par_defaut = {
		semelle: "#ffffff",
		empeigne: "#ffffff",
		pointe: "#ffffff",
		oeillet: "#ffffff",
		bande: "#ffffff",
		languette: "#ffffff",
		lacet: "#ffffff",
		trimestre: "#ffffff"
	};
	const configuration_actuelle = configurationInitiale ?? configuration_par_defaut;
	return renderTemplate`${maybeRenderHead($$result)}<div class="configurateur flex flex-col items-center gap-6 p-4"${addAttribute(JSON.stringify(configuration_par_defaut), "data-configuration-defaut")}${addAttribute(JSON.stringify(gradientsInitiale), "data-gradients")}><div class="flex flex-wrap justify-center gap-4">${renderComponent($$result, "BasketProfil", $$BasketProfil, { ...configuration_actuelle })}${renderComponent($$result, "BasketDessus", $$BasketDessus, { ...configuration_actuelle })}</div><div class="chat-ia flex w-full max-w-md flex-col items-center gap-2 py-2"><div class="chat-historique flex max-h-60 w-full flex-col gap-2 overflow-y-auto"></div><textarea class="chat-message textarea textarea-bordered w-full" placeholder="Ex : une semelle noire et des lacets rouge vif"></textarea><div class="flex w-full gap-2"><button type="button" class="chat-button flex-1 rounded bg-primary px-4 py-2 font-semibold text-white transition hover:bg-secondary">Demander à l'IA</button><button type="button" class="chat-nouvelle rounded border border-base-content/30 bg-base-100 px-3 py-2 text-sm font-medium hover:bg-base-200">Nouvelle conversation</button></div></div><div class="flex w-full max-w-md flex-col gap-3 rounded-lg border border-base-content/20 p-4"><h2 class="text-lg font-semibold">Partager cette chaussure</h2><div class="flex w-full gap-2"><input type="text" class="code-chaussure input input-bordered min-w-0 flex-1 font-mono text-sm" readonly aria-label="Code de la chaussure actuelle" placeholder="Le code apparaîtra ici"><button type="button" class="copier-code btn btn-primary">Copier le code</button></div><div class="flex w-full gap-2"><input type="text" class="importer-code input input-bordered min-w-0 flex-1 font-mono text-sm" placeholder="Coller un code de chaussure" aria-label="Code de la chaussure à importer"><button type="button" class="importer-chaussure btn btn-outline">Importer</button></div><p class="code-message min-h-5 text-sm" role="status" aria-live="polite"></p></div><div class="flex w-full max-w-md flex-col gap-3 rounded-lg border border-base-content/20 p-4"><h2 class="text-lg font-semibold">Ajouter un gradient</h2><div class="flex flex-wrap items-end gap-2"><label class="flex min-w-36 flex-1 flex-col gap-1 text-sm font-medium">Partie<select class="gradient-partie select select-bordered w-full">${Object.keys(configuration_actuelle).map((partie) => renderTemplate`<option${addAttribute(partie, "value")}>${partie}</option>`)}</select></label><label class="flex flex-col gap-1 text-sm font-medium">Seconde couleur<input type="color" class="gradient-couleur h-10 w-16 cursor-pointer" value="#000000"></label><button type="button" class="appliquer-gradient btn btn-primary">Appliquer</button><button type="button" class="supprimer-gradient btn btn-outline">Supprimer</button></div><p class="gradient-message min-h-5 text-sm" role="status" aria-live="polite"></p></div><form method="POST" class="flex flex-col items-center gap-4"><input type="hidden" name="gradients" class="gradients-formulaire"${addAttribute(JSON.stringify(gradientsInitiale), "value")}><input type="text" name="description" placeholder="Nom de la basket" class="input input-bordered w-full max-w-xs"><input type="text" name="tags" placeholder="Tags séparés par des virgules : sport, rouge" class="input input-bordered w-full max-w-xs"><div class="flex flex-wrap items-center justify-center gap-4 py-2">${Object.entries(configuration_actuelle).map(([partie, couleur]) => renderTemplate`<div class="flex flex-col items-center"><label${addAttribute(partie, "for")} class="text-sm font-medium capitalize">${partie}</label><input type="color"${addAttribute(partie, "id")}${addAttribute(partie, "name")}${addAttribute(couleur, "value")} class="cursor-pointer"></div>`)}</div><div class="flex gap-4"><button type="submit" class="border-2 border-green-600 bg-green-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-700 transition-colors cursor-pointer">Enregistrer la configuration</button><button type="button" class="reinitialiser border-2 border-black rounded-lg px-4 py-2 font-semibold hover:bg-black hover:text-white transition-colors cursor-pointer">Réinitialiser les couleurs</button></div></form></div>${renderScript($$result, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/components/Configurateur.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/components/Configurateur.astro", void 0);
//#endregion
//#region src/pages/configurateur.astro
var configurateur_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Configurateur,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Configurateur = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Configurateur;
	let configuration_basket = {
		semelle: "#ffffff",
		empeigne: "#ffffff",
		pointe: "#ffffff",
		oeillet: "#ffffff",
		bande: "#ffffff",
		languette: "#ffffff",
		lacet: "#ffffff",
		trimestre: "#ffffff"
	};
	let gradients_basket = {};
	if (Astro.request.method === "POST") {
		const formData = await Astro.request.formData();
		configuration_basket = {
			semelle: formData.get("semelle")?.toString() ?? "#ffffff",
			empeigne: formData.get("empeigne")?.toString() ?? "#ffffff",
			pointe: formData.get("pointe")?.toString() ?? "#ffffff",
			oeillet: formData.get("oeillet")?.toString() ?? "#ffffff",
			bande: formData.get("bande")?.toString() ?? "#ffffff",
			languette: formData.get("languette")?.toString() ?? "#ffffff",
			lacet: formData.get("lacet")?.toString() ?? "#ffffff",
			trimestre: formData.get("trimestre")?.toString() ?? "#ffffff"
		};
		const description = formData.get("description")?.toString() ?? "";
		const tags = formData.get("tags")?.toString() ?? "";
		const gradients = formData.get("gradients")?.toString() ?? "{}";
		try {
			gradients_basket = JSON.parse(gradients);
		} catch {
			gradients_basket = {};
		}
		db.run(`INSERT INTO BASKETS (user_id, description, semelle, empeigne, pointe, oeillet, bande, languette, lacet, trimestre, tags, gradients)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
			Astro.locals.user.id,
			description,
			configuration_basket.semelle,
			configuration_basket.empeigne,
			configuration_basket.pointe,
			configuration_basket.oeillet,
			configuration_basket.bande,
			configuration_basket.languette,
			configuration_basket.lacet,
			configuration_basket.trimestre,
			JSON.stringify(normaliserTags(tags)),
			gradients
		]);
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Configurateur", $$Configurateur$1, {
		"configurationInitiale": configuration_basket,
		"gradientsInitiale": gradients_basket
	})}` })}`;
}, "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/configurateur.astro", void 0);
var $$file = "C:/Users/Maud/Documents/GitHub/r312-2026-r312-tp/src/pages/configurateur.astro";
var $$url = "/configurateur";
//#endregion
//#region \0virtual:astro:page:src/pages/configurateur@_@astro
var page = () => configurateur_exports;
//#endregion
export { page };
