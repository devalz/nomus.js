const ACRONYM_BOUNDARY = /([A-Z]+)([A-Z][a-z0-9]+)/g;
const CAMEL_BOUNDARY = /([a-z0-9])([A-Z])/g;

export function splitWords(input: string): string[] {
  if (!input.trim()) {
    return [];
  }

  return input
    .trim()
    .replace(ACRONYM_BOUNDARY, "$1 $2")
    .replace(CAMEL_BOUNDARY, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.toLowerCase());
}

export function capitalize(word: string): string {
  if (!word) {
    return "";
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
