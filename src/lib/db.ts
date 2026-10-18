// @ts-expect-error bun:sqlite est fourni par le runtime Bun, TypeScript ne le connaît pas forcément
import { Database } from "bun:sqlite";

// new URL(..., import.meta.url) ancre le chemin sur ce fichier : la base utilisée
// est toujours la même, quel que soit le répertoire depuis lequel le process démarre.
const db = new Database(new URL("../../data/db.sqlite", import.meta.url).pathname, { create: true });
db.exec("PRAGMA journal_mode = WAL;");

export interface Basket {
  id: number;
  user_id: string;
  description: string;
  semelle: string;
  empeigne: string;
  pointe: string;
  oeillet: string;
  bande: string;
  languette: string;
  lacet: string;
  trimestre: string;
  tags: string;
  gradients: string;
}

db.run(`CREATE TABLE IF NOT EXISTS BASKETS (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL REFERENCES user(id),
  description TEXT,
  semelle TEXT DEFAULT '#ffffff',
  empeigne TEXT DEFAULT '#ffffff',
  pointe TEXT DEFAULT '#ffffff',
  oeillet TEXT DEFAULT '#ffffff',
  bande TEXT DEFAULT '#ffffff',
  languette TEXT DEFAULT '#ffffff',
  lacet TEXT DEFAULT '#ffffff',
  trimestre TEXT DEFAULT '#ffffff',
  tags TEXT DEFAULT '[]',
  gradients TEXT DEFAULT '{}'
)`);

const colonneTags = db
  .query("SELECT 1 FROM pragma_table_info('BASKETS') WHERE name = 'tags'")
  .get();
if (!colonneTags) {
  db.run("ALTER TABLE BASKETS ADD COLUMN tags TEXT DEFAULT '[]'");
}

const colonneGradients = db
  .query("SELECT 1 FROM pragma_table_info('BASKETS') WHERE name = 'gradients'")
  .get();
if (!colonneGradients) {
  db.run("ALTER TABLE BASKETS ADD COLUMN gradients TEXT DEFAULT '{}'");
}

export const normaliserTags = (valeur: string) =>
  [...new Set(valeur.split(",").map((tag) => tag.trim().toLowerCase()).filter(Boolean))].slice(0, 12);

export const lireTags = (valeur: string | null | undefined) => {
  try {
    const tags = JSON.parse(valeur ?? "[]");
    return Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === "string") : [];
  } catch {
    return [];
  }
};

export default db;