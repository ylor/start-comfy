import { writable } from "svelte/store";

export const db = Object.values(
  import.meta.glob("$lib/search/db/*.json", { eager: true, import: "default" })
).flat();
export const gifs = Object.values(
  import.meta.glob("$lib/assets/gifs/*.gif", { eager: true, import: "default" })
);
export const searching = writable(false);
