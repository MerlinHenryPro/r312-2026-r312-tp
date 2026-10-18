import { DatabaseSync } from "node:sqlite";
//#region src/lib/db.ts
var databasePath = process.env.NETLIFY === "true" ? "/tmp/r312-baskets.sqlite" : new URL("../../data/db.sqlite", import.meta.url).pathname;
var db = new DatabaseSync(databasePath);
db.exec("PRAGMA journal_mode = WAL;");
db.exec(`CREATE TABLE IF NOT EXISTS BASKETS (
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
if (!db.prepare("SELECT 1 FROM pragma_table_info('BASKETS') WHERE name = 'tags'").get()) db.exec("ALTER TABLE BASKETS ADD COLUMN tags TEXT DEFAULT '[]'");
if (!db.prepare("SELECT 1 FROM pragma_table_info('BASKETS') WHERE name = 'gradients'").get()) db.exec("ALTER TABLE BASKETS ADD COLUMN gradients TEXT DEFAULT '{}'");
var normaliserTags = (valeur) => [...new Set(valeur.split(",").map((tag) => tag.trim().toLowerCase()).filter(Boolean))].slice(0, 12);
var lireTags = (valeur) => {
	try {
		const tags = JSON.parse(valeur ?? "[]");
		return Array.isArray(tags) ? tags.filter((tag) => typeof tag === "string") : [];
	} catch {
		return [];
	}
};
//#endregion
export { lireTags as n, normaliserTags as r, db as t };
