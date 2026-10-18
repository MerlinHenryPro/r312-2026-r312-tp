export const prerender = false;

import { OpenAI } from "openai";

const INFERENCE_API_KEY = import.meta.env.INFERENCE_API_KEY;
const INFERENCE_MODEL = import.meta.env.INFERENCE_MODEL ?? "google/gemma-3-27b-it:free";

const PARTIES = ["semelle", "empeigne", "pointe", "oeillet", "bande", "languette", "lacet", "trimestre"];

export const POST = async ({ request }) => {
  const { message, configuration, historique = [] } = await request.json();

  const client = new OpenAI({
    baseURL: import.meta.env.INFERENCE_URL,
    apiKey: INFERENCE_API_KEY,
  });

  const historiqueValide = Array.isArray(historique)
    ? historique
        .filter((entry) => entry && typeof entry === "object" && (entry.role === "user" || entry.role === "assistant") && typeof entry.content === "string")
        .slice(-10)
    : [];

  const chatCompletion = await client.chat.completions.create({
    model: INFERENCE_MODEL,
    messages: [
      {
        role: "system",
        content:
          `Tu choisis les couleurs d'une paire de basket personnalisée. ` +
          `Réponds UNIQUEMENT avec un objet JSON, sans aucun texte autour, contenant exactement ces clés : ${PARTIES.join(", ")}. ` +
          `Chaque valeur doit être une couleur au format hexadécimal #rrggbb. ` +
          `Voici la configuration actuelle : ${JSON.stringify(configuration ?? {})}. ` +
          `Ne change que les parties mentionnées par l'utilisateur, garde les autres identiques. ` +
          `Si l'utilisateur demande une variante plus claire ou plus sombre, modifie uniquement les couleurs concernées et conserve le reste.`,
      },
      ...historiqueValide,
      { role: "user", content: message },
    ],
  });

  const content = chatCompletion.choices[0].message.content || "";
  console.log("réponse IA (couleurs) :", content);

  const jsonMatch = content.match(/\{[\s\S]*\}/);

  const couleurs = {};
  try {
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
    for (const partie of PARTIES) {
      if (typeof parsed[partie] === "string" && /^#[0-9a-fA-F]{6}$/.test(parsed[partie])) {
        couleurs[partie] = parsed[partie];
      }
    }
  } catch (error) {
    console.error("Réponse IA non parsable en JSON :", error);
  }

  return new Response(JSON.stringify({ couleurs, reponse: content }), {
    headers: { "Content-Type": "application/json" },
  });
};
