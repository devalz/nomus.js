import { capitalize, splitWords } from "./utils.js";
import type { NamingStyle } from "./types.js";

const PASCAL_CASE = /^[A-Z][A-Za-z0-9]*$/;
const CAMEL_CASE = /^[a-z][A-Za-z0-9]*$/;
const SNAKE_CASE = /^[a-z0-9]+(?:_[a-z0-9]+)+$/;
const SCREAMING_SNAKE_CASE = /^[A-Z0-9]+(?:_[A-Z0-9]+)+$/;
const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)+$/;
const UPPER_KEBAB_CASE = /^[A-Z0-9]+(?:-[A-Z0-9]+)+$/;
const TITLE_CASE = /^[A-Z][a-z0-9]*(?: [A-Z][a-z0-9]*)+$/;
const TRAIN_CASE = /^[A-Z][a-z0-9]*(?:-[A-Z][a-z0-9]*)+$/;
const LOWERCASE = /^[a-z0-9]+(?: [a-z0-9]+)*$/;
const UPPERCASE = /^[A-Z0-9]+(?: [A-Z0-9]+)*$/;

export function detectNamingStyle(input: string): NamingStyle | "" {
  if (!input.trim()) {
    return "";
  }

  if (SNAKE_CASE.test(input)) {
    return "snake_case";
  }

  if (SCREAMING_SNAKE_CASE.test(input)) {
    return "SCREAMING_SNAKE_CASE";
  }

  if (KEBAB_CASE.test(input)) {
    return "kebab-case";
  }

  if (UPPER_KEBAB_CASE.test(input)) {
    return "UPPER-KEBAB-CASE";
  }

  if (TRAIN_CASE.test(input)) {
    return "Train-Case";
  }

  if (TITLE_CASE.test(input)) {
    return "Title Case";
  }

  if (CAMEL_CASE.test(input) && /[A-Z]/.test(input)) {
    return "camelCase";
  }

  if (PASCAL_CASE.test(input) && /[a-z]/.test(input)) {
    return "PascalCase";
  }

  if (LOWERCASE.test(input)) {
    return "lowercase";
  }

  if (UPPERCASE.test(input)) {
    return "UPPERCASE";
  }

  return "Unknown / Mixed";
}

export function toUpperCase(input: string): string {
  return splitWords(input).join("").toUpperCase();
}

export function toLowerCase(input: string): string {
  return splitWords(input).join("").toLowerCase();
}

export function toPascalCase(input: string): string {
  return splitWords(input).map(capitalize).join("");
}

export function toCamelCase(input: string): string {
  const words = splitWords(input);

  if (words.length === 0) {
    return "";
  }

  const [first, ...rest] = words;
  return first + rest.map(capitalize).join("");
}

export function toSnakeCase(input: string): string {
  return splitWords(input).join("_");
}

export function toScreamingSnakeCase(input: string): string {
  return splitWords(input).join("_").toUpperCase();
}

export function toKebabCase(input: string): string {
  return splitWords(input).join("-");
}

export function toUpperKebabCase(input: string): string {
  return splitWords(input).join("-").toUpperCase();
}

export function toTitleCase(input: string): string {
  return splitWords(input).map(capitalize).join(" ");
}

export function toTrainCase(input: string): string {
  return splitWords(input).map(capitalize).join("-");
}

export class Naming {
  static detectNamingStyle(input: string): NamingStyle | "" {
    return detectNamingStyle(input);
  }

  static toUpperCase(input: string): string {
    return toUpperCase(input);
  }

  static toLowerCase(input: string): string {
    return toLowerCase(input);
  }

  static toPascalCase(input: string): string {
    return toPascalCase(input);
  }

  static toCamelCase(input: string): string {
    return toCamelCase(input);
  }

  static toSnakeCase(input: string): string {
    return toSnakeCase(input);
  }

  static toScreamingSnakeCase(input: string): string {
    return toScreamingSnakeCase(input);
  }

  static toKebabCase(input: string): string {
    return toKebabCase(input);
  }

  static toUpperKebabCase(input: string): string {
    return toUpperKebabCase(input);
  }

  static toTitleCase(input: string): string {
    return toTitleCase(input);
  }

  static toTrainCase(input: string): string {
    return toTrainCase(input);
  }
}
