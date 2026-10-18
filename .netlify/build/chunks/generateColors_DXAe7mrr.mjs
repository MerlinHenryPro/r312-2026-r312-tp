import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { OpenAI } from "openai";
//#region src/pages/api/generateColors.js
var generateColors_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var INFERENCE_API_KEY = "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";
var INFERENCE_MODEL = "google/gemma-3-27b-it:free";
var PARTIES = [
	"semelle",
	"empeigne",
	"pointe",
	"oeillet",
	"bande",
	"languette",
	"lacet",
	"trimestre"
];
var POST = async ({ request }) => {
	const { message, configuration, historique = [] } = await request.json();
	const client = new OpenAI({
		baseURL: "https://openrouter.ai/api/v1",
		apiKey: INFERENCE_API_KEY
	});
	const historiqueValide = Array.isArray(historique) ? historique.filter((entry) => entry && typeof entry === "object" && (entry.role === "user" || entry.role === "assistant") && typeof entry.content === "string").slice(-10) : [];
	const content = (await client.chat.completions.create({
		model: INFERENCE_MODEL,
		messages: [
			{
				role: "system",
				content: `Tu choisis les couleurs d'une paire de basket personnalisée. Réponds UNIQUEMENT avec un objet JSON, sans aucun texte autour, contenant exactement ces clés : ${PARTIES.join(", ")}. Chaque valeur doit être une couleur au format hexadécimal #rrggbb. Voici la configuration actuelle : ${JSON.stringify(configuration ?? {})}. Ne change que les parties mentionnées par l'utilisateur, garde les autres identiques. Si l'utilisateur demande une variante plus claire ou plus sombre, modifie uniquement les couleurs concernées et conserve le reste.`
			},
			...historiqueValide,
			{
				role: "user",
				content: message
			}
		]
	})).choices[0].message.content || "";
	console.log("réponse IA (couleurs) :", content);
	const jsonMatch = content.match(/\{[\s\S]*\}/);
	const couleurs = {};
	try {
		const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
		for (const partie of PARTIES) if (typeof parsed[partie] === "string" && /^#[0-9a-fA-F]{6}$/.test(parsed[partie])) couleurs[partie] = parsed[partie];
	} catch (error) {
		console.error("Réponse IA non parsable en JSON :", error);
	}
	return new Response(JSON.stringify({
		couleurs,
		reponse: content
	}), { headers: { "Content-Type": "application/json" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/generateColors@_@js
var page = () => generateColors_exports;
//#endregion
export { page };
